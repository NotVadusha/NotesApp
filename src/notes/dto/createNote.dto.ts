export class CreateNoteDto {
  readonly title: string;
  readonly content?: string;
  readonly category: string;
  readonly is_archived: boolean;
}
