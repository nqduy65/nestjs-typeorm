import { IsBoolean, IsString } from 'class-validator';

export class CreateCityDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  active: boolean;
}
