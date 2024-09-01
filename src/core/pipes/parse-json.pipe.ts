
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ParseJsonPipe implements PipeTransform {

    async transform(value: string, { metatype }: ArgumentMetadata) {
        if (!value) return value;

        let object;
        try {
            object = JSON.parse(value);
        } catch (e) {
            throw new BadRequestException('Invalid JSON format');
        }

        if (!metatype || !this.toValidate(metatype)) {
            return object;
        }

        const entity = plainToInstance(metatype, object);
        const errors = await validate(entity);

        if (errors.length > 0) {
            throw new BadRequestException('Validation failed');
        }

        return entity;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }

}
