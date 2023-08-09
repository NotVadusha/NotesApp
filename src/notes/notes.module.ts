import { Module } from "@nestjs/common";
import { NotesController } from "./notes.controller";
import { NotesService } from "./notes.service";
import Notes from "./notes.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [SequelizeModule.forFeature([Notes])],
})
export class NotesModule {}
