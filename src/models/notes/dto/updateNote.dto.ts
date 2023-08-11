import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";

export class UpdateNoteDto {
  @IsString({ message: "Must be a string" })
  @IsNotEmpty()
  readonly title: string;

  @IsString({ message: "Must be a string" })
  @IsOptional()
  readonly content: string;

  @IsString({ message: "Must be a string" })
  @IsNotEmpty()
  readonly category: string;

  @IsBoolean({ message: "Must be a boolean" })
  @IsNotEmpty()
  readonly is_archived: boolean;
}
