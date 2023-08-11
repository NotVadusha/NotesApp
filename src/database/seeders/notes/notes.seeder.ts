import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import Note from "src/models/notes/notes.model";
import { NotesService } from "src/models/notes/notes.service";

@Module({
  imports: [SequelizeModule.forFeature([Note])],
  providers: [NotesService],
  exports: [NotesService],
})
export class NotesSeeder {}
