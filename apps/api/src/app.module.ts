import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LeadsModule } from './leads/leads.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [AuthModule, LeadsModule, QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
