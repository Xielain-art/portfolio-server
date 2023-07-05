import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Education, Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async createEducation(createEducationDto: CreateEducationDto) {
    const data = { ...createEducationDto };
    await this.prisma.education.create({ data });
    return { status: 'ok' };
  }

  async getAllEducation(): Promise<Education[]> {
    const educationList = await this.prisma.education.findMany();
    return educationList;
  }

  async updateEducation(
    { id }: Prisma.EducationWhereUniqueInput,
    body: UpdateEducationDto,
  ) {
    try {
      await this.prisma.education.update({ where: { id }, data: body });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new NotFoundException(`${error.meta.cause}`);
      }

      throw new BadRequestException(`${error.meta.cause}`);
    }
    return { status: 'ok' };
  }

  async deleteEducation({ where }: Prisma.EducationDeleteArgs) {
    try {
      await this.prisma.education.delete({ where });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new NotFoundException(`${error.meta.cause}`);
      }

      throw new BadRequestException(`${error.meta.cause}`);
    }
    return { status: 'ok' };
  }
}
