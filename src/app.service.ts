import { Injectable } from '@nestjs/common';

const data = 'hallo tino rajen';
const dataB = 'This is your profile page';
@Injectable()
export class AppService {
  getHello(): string {
    return data;
  }
  getProfile(): string {
    return dataB;
  }
}
