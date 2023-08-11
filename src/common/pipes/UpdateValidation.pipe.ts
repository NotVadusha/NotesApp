import { UpdateNoteDto } from "src/models/notes/dto/updateNote.dto";
import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class UpdateValidation implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const note = plainToInstance(UpdateNoteDto, value);
    if (Object.keys(note).length === 0) {
      throw new BadRequestException("No one from necessary fields given");
    }

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
