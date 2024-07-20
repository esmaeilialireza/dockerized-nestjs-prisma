import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Food } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('foods')
  async getFoods(): Promise<Food[]> {
    return await this.appService.getFoods();
  }
}
