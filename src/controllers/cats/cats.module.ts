import { Module } from '@nestjs/common';
import { CastController } from './cats.controler';
import { CatsService } from './cats.service';

@Module({
  controllers: [CastController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
