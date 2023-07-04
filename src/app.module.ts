import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [ConfigModule.forRoot(), SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
