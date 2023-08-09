import { NotesService } from "./notes.service";
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  Req,
} from "@nestjs/common";
import { CreateNoteDto } from "./dto/createNote.dto";

@Controller("notes")
export class NotesController {
  constructor(private NotesService: NotesService) {}

  @Post()
  postNote(@Body() noteDto: CreateNoteDto) {
    return this.NotesService.postNote(noteDto);
  }
  @Get()
  getAllNotes() {
    return this.NotesService.getAllNotes();
  }
  @Get(":id")
  getOneNote(@Param("id") noteId: number) {
    return this.NotesService.getOneNote(noteId);
  }
  @Patch(":id")
  patchNote(@Param("id") noteId: number, @Body() noteDto: CreateNoteDto) {
    return this.NotesService.patchNote(noteDto, noteId);
  }
  @Delete(":id")
  deleteNote(@Param("id") noteId: number) {
    return this.NotesService.deleteNote(noteId);
  }
  @Get("/stats")
  getStats() {
    return;
  }
}
