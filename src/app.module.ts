import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ResourcesModule } from './resources/resources.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [CategoriesModule, ResourcesModule, AuthModule],
  providers: [PrismaService],
})

export class AppModule {}