import { NotesService } from "./notes.service";
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  NotFoundException,
  ParseIntPipe,
} from "@nestjs/common";
import { CreateNoteDto } from "./dto/createNote.dto";
import { SaveValidation } from "src/common/pipes/SaveValidation.pipe";
import { UpdateNoteDto } from "./dto/updateNote.dto";
import { UpdateValidation } from "../../common/pipes/UpdateValidation.pipe";
import { getStats } from "src/common/helpers/getStats";
@Controller("notes")
export class NotesController {
  constructor(private NotesService: NotesService) {}

  @Get("/stats")
  async getNotesStats(): Promise<any> {
    const notes = await this.NotesService.getAllNotes();
    const stats = await getStats(notes);
    return stats;
  }

  @Post()
  async postNote(
    @Body(SaveValidation)
    { title, content, is_archived, category }: CreateNoteDto
  ) {
    const newNote = { title, content, is_archived, category };
    return this.NotesService.postNote(newNote);
  }

  @Get()
  async getAllNotes() {
    const notes = await this.NotesService.getAllNotes();
    if (notes.length < 1) {
      throw new NotFoundException("There is no notes in DB");
    }
    return notes;
  }

  @Get(":id")
  async getOneNote(@Param("id", ParseIntPipe) noteId: number) {
    const note = await this.NotesService.getOneNote(noteId);
    if (!note) {
      throw new NotFoundException("There is no note with such id in DB");
    }
    return note;
  }

  @Patch(":id")
  async patchNote(
    @Param("id", ParseIntPipe) noteId: number,
    @Body(UpdateValidation)
    { title, content, is_archived, category }: UpdateNoteDto
  ) {
    const updatedNote = {
      title,
      content,
      is_archived,
      category,
    };

    const [note] = await this.NotesService.patchNote(updatedNote, noteId);

    if (note < 1) {
      throw new NotFoundException("There is no note with such id in DB");
    }
    return await this.NotesService.getOneNote(noteId);
  }

  @Delete(":id")
  async deleteNote(@Param("id", ParseIntPipe) noteId: number) {
    const note = await this.NotesService.deleteNote(noteId);
    if (!note) {
      throw new NotFoundException("There is no note with such id in DB");
    }
    return { Message: "Successfully deleted" };
  }
}
