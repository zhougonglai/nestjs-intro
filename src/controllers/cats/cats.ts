import { IsNumberString, IsString } from 'class-validator';

export class CatDto {
  @IsString()
  readonly name: string;
  @IsNumberString()
  readonly age: number;
  @IsString()
  readonly breed: string;
}

export interface Cat {
  name: string;
  age: number;
  breed: string;
}
