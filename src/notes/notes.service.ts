import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import Notes from "./notes.model";
import INote from "src/interfaces/INote";
import { CreateNoteDto } from "./dto/createNote.dto";

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Notes)
    private NotesDB: typeof Notes
  ) {}

  async postNote(note: CreateNoteDto) {
    return await this.NotesDB.create(note);
  }

  async getAllNotes() {
    return await this.NotesDB.findAll();
  }

  async getOneNote(noteId: number) {
    return await this.NotesDB.findOne({ where: { id: noteId } });
  }

  async patchNote(note: CreateNoteDto, noteId: number) {
    return this.NotesDB.update({ ...note }, { where: { id: noteId } });
  }

  async deleteNote(noteId: number) {
    return this.NotesDB.destroy({ where: { id: noteId } });
  }
}
