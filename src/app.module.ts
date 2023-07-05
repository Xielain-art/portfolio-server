import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillModule } from './skill/skill.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [ConfigModule.forRoot(), SkillModule, AuthModule, EducationModule, ExperienceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
