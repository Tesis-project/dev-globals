import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class ParseJsonPipe implements PipeTransform {
    transform(value: string, { metatype }: ArgumentMetadata): Promise<any>;
    private toValidate;
}
