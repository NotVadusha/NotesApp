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
import { SaveValidation } from "src/pipes/SaveValidation.pipe";

@Controller("notes")
export class NotesController {
  constructor(private NotesService: NotesService) {}

  @Get("/stats")
  async getStats() {
    return { stats: "stats" };
  }
  @Post()
  async postNote(@Body(SaveValidation) noteDto: CreateNoteDto) {
    return this.NotesService.postNote(noteDto);
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
    @Body() noteDto: CreateNoteDto
  ) {
    const note = await this.NotesService.patchNote(noteDto, noteId);
    console.log(note);
    return note;
  }
  @Delete(":id")
  async deleteNote(@Param("id", ParseIntPipe) noteId: number) {
    const note = await this.NotesService.deleteNote(noteId);
    if (!note) {
      throw new NotFoundException("There is no note with such id in DB");
    }
    return note;
  }
}
