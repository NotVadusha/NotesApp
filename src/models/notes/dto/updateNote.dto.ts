import { IsString, IsBoolean, IsOptional } from "class-validator";

export class UpdateNoteDto {
  @IsString({ message: "Must be a string" })
  @IsOptional()
  readonly title: string;

  @IsString({ message: "Must be a string" })
  @IsOptional()
  readonly content: string;

  @IsOptional()
  @IsString({ message: "Must be a string" })
  readonly category: string;

  @IsBoolean({ message: "Must be a boolean" })
  @IsOptional()
  readonly is_archived: boolean;
}
