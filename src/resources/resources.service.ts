import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';

@Injectable()
export class ResourcesService {
  constructor(private prisma: PrismaService) {}

  async create(createResourceDto: CreateResourceDto) {
    return this.prisma.resource.create({
      data: createResourceDto,
    });
  }

  async findOne(id: string) {
    return this.prisma.resource.findUnique({
      where: { id },
      include: { category: true }, // Inclui a categoria relacionada
    });
  }

  async update(id: string, updateResourceDto: UpdateResourceDto) {
    return this.prisma.resource.update({
      where: { id },
      data: updateResourceDto,
    });
  }

  async remove(id: string) {
    return this.prisma.resource.delete({
      where: { id },
    });
  }
}