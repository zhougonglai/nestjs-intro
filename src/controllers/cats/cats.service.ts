import { Injectable } from '@nestjs/common';
import { Cat } from './cats';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async create(cat: Cat): Promise<Cat[]> {
    this.cats.push(cat);
    return this.findAll();
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
