import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlpha()
  @MaxLength(10)
  name: string;
}