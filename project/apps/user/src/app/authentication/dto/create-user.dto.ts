import { IsEmail, IsString, Length } from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from '../authentication.constant';

export class CreateUserDto {
  @IsEmail({}, { message: AUTH_USER_EMAIL_NOT_VALID })
  public email: string;

  @IsString()
  @Length(3, 50)
  public firstname: string;

  @IsString()
  @Length(3, 50)
  public lastname: string;

  @IsString()
  @Length(6, 12)
  public password: string;
}
