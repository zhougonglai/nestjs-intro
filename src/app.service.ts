import { Injectable } from '@nestjs/common';
import { User } from './model';

@Injectable()
export class AppService {
  getHello(): User {
    return {
      name: 'ZGL',
    };
  }
}
