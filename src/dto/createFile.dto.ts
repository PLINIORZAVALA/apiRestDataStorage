import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateFileDto {
  @IsNotEmpty()
  @IsString()
  readonly originalName: string;

  @IsNotEmpty()
  @IsString()
  readonly storedName: string;

  @IsNotEmpty()
  @IsString()
  readonly path: string;

  @IsNotEmpty()
  @IsNumber()
  readonly size: number;

  @IsNotEmpty()
  @IsString()
  readonly mimetype: string;
}
