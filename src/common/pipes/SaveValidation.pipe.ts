import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateNoteDto } from "src/models/notes/dto/createNote.dto";

@Injectable()
export class SaveValidation implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const note = plainToInstance(CreateNoteDto, value);
    const errors = await validate(note);

    if (errors.length) {
      const messages = errors.map((error) => {
        return `${error.property}: ${
          error.constraints && Object.values(error.constraints).join(". ")
        }`;
      });
      throw new BadRequestException(messages);
    }
    return value;
  }
}
