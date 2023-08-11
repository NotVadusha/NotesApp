import { defaultNotes } from "./notes/defaultNotes";
import { Injectable } from "@nestjs/common";
import { NotesService } from "src/models/notes/notes.service";

@Injectable()
export class Seeder {
  constructor(private readonly NotesSeederService: NotesService) {}
  async seed() {
    const notes = await this.NotesSeederService.getAllNotes();
    notes.map((note) => {
      this.NotesSeederService.deleteNote(note.id);
    });
    defaultNotes.map((note) => {
      this.NotesSeederService.postNote(note);
    });
  }
}
