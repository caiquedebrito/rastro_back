import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { ResourcesModule } from './resources/resources.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [CategoriesModule, ResourcesModule],
  providers: [PrismaService],
})
export class AppModule {}