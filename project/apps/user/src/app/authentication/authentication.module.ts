import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { BlogUserModule } from '../blog-user/blog-user.module';

@Module({
  imports: [BlogUserModule],
  controllers: [],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
