import { Food } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}
  readonly foods: string[] = ['Pizza', 'Pasta', 'Stake'];

  async getFoods(): Promise<Food[]> {
    return await this.prismaService.food.findMany();
  }
}
