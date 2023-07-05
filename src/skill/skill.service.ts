import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Skill } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) {}

  async create(createSkillDto: CreateSkillDto) {
    const data = { ...createSkillDto };
    await this.prisma.skill.create({ data });
    return { status: 'ok' };
  }
  async findAll(): Promise<Skill[]> {
    return this.prisma.skill.findMany();
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    const data = { ...updateSkillDto };

    try {
      await this.prisma.skill.update({ where: { id }, data });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(`${err.meta.cause}`, HttpStatus.BAD_REQUEST);
      }

      throw new HttpException('Unknown error', HttpStatus.BAD_REQUEST);
    }

    return { status: 'ok' };
  }

  async remove(id: Prisma.SkillWhereUniqueInput) {
    try {
      await this.prisma.skill.delete({ where: id });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(`${err.meta.cause}`, HttpStatus.BAD_REQUEST);
      }

      throw new HttpException('Unknown error', HttpStatus.BAD_REQUEST);
    }
    return { status: 'ok' };
  }
}
