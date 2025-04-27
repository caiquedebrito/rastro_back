import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ResourcesModule } from './resources/resources.module';
import { PrismaService } from './prisma.service';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [CategoriesModule, ResourcesModule, AuthModule, LoanModule],
  providers: [PrismaService],
})

export class AppModule {}