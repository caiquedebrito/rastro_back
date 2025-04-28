import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoanService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLoanDto: CreateLoanDto) {
    return this.prisma.loan.create({
      data: {
        userId: createLoanDto.userId,
        resourceId: createLoanDto.resourceId,
        expectedReturn: createLoanDto.expectedReturn,
        status: 'ACTIVE',
      },
    });
  }

  async findAll() {
    return this.prisma.loan.findMany();
  }

  async findOne(id: string) {
    const loan = await this.prisma.loan.findUnique({
      where: { id },
    });
    if (!loan) {
      throw new BadRequestException(`Loan with ID ${id} not found`);
    }
    return loan;
  }

  async update(id: string, updateLoanDto: UpdateLoanDto) {
    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
    });
  }

  async remove(id: string) {
    return this.prisma.loan.delete({
      where: { id },
    });
  }

  async return(id: string) {
    const loan = await this.findOne(id);

    if (loan.status !== 'ACTIVE') {
      throw new BadRequestException(`Loan with ID ${id} is not currently borrowed`);
    }

    return this.prisma.loan.update({
      where: { id },
      data: {
        status: 'RETURNED',
        returnedAt: new Date(),
      },
    });
  }
}
