import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductoDto {
  //readonly, es que no puede ser manipulado, tiene que ser insertado tal cual me lo mandaron
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductoDto extends PartialType(CreateProductoDto) {}
