import { Module } from "@nestjs/common";
import { PsqlDBProviderModule } from "../provider.module";
import { Seeder } from "./seeder";
import { NotesSeeder } from "./notes/notes.seeder";

@Module({
  imports: [PsqlDBProviderModule, NotesSeeder],
  providers: [Seeder],
})
export class SeederModule {}
