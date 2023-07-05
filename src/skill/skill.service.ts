import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Prisma, Skill } from '@prisma/client';

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

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
