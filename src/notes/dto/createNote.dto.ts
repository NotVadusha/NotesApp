import { IsString, IsBoolean, IsNotEmpty } from "class-validator";

export class CreateNoteDto {
  @IsString({ message: "Must be a string" })
  @IsNotEmpty()
  readonly title: string;

  @IsString({ message: "Must be a string" })
  readonly content?: string;

  @IsString({ message: "Must be a string" })
  @IsNotEmpty()
  readonly category: string;

  @IsBoolean({ message: "Must be a boolean" })
  @IsNotEmpty()
  readonly is_archived: boolean;
}
