import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './controllers/cats/cats.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [CatsModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
