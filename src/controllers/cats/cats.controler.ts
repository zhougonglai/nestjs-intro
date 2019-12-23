import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Cat, CatDto } from './cats';
import { CatsService } from './cats.service';

@Controller('cats')
export class CastController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  async findAll(@Req() request: Request): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id, @Res() res: Response) {
    res.json({
      id,
    });
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() catDto: CatDto) {
    return this.catsService.create(catDto);
  }
}
