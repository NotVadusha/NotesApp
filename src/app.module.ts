import { Module } from "@nestjs/common";
import { NotesModule } from "./models/notes/notes.module";
import { ConfigModule } from "@nestjs/config";
import { PsqlDBProviderModule } from "./database/provider.module";

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".development.env",
    }),
    PsqlDBProviderModule,
    NotesModule,
  ],
  providers: [],
})
export class AppModule {}
