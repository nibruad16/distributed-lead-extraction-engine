import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { EventsModule } from './events/events.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [PrismaModule, RedisModule, EventsModule, JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
