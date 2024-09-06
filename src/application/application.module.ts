import { HttpModule } from 'infrastructure/http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
