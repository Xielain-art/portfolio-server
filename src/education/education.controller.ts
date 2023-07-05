import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateEducationDto } from './dto/create-education.dto';
import { EducationService } from './education.service';
import { Education } from '@prisma/client';
import { UpdateEducationDto } from './dto/update-education.dto';
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createEducation(@Body() createEducationDto: CreateEducationDto) {
    return this.educationService.createEducation(createEducationDto);
  }

  @Get()
  getAllEducation() {
    return this.educationService.getAllEducation();
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  updateEducation(
    @Body() updateEducationDto: UpdateEducationDto,
    @Param('id') id: string,
  ) {
    return this.educationService.updateEducation(
      { id: +id },
      updateEducationDto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteEducation(@Param('id') id: string) {
    return this.educationService.deleteEducation({ where: { id: +id } });
  }
}
