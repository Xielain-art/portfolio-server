import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillModule } from './skill/skill.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), SkillModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
