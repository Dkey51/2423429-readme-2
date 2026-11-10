import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';

@Module({
  imports: [BlogUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
