import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Cat, CatDto } from './cats';
import { CatsService } from './cats.service';

@Controller('cats')
export class CastController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() catDto: CatDto) {
    return this.catsService.create(catDto);
  }
}
