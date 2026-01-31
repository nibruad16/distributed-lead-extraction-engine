import { Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';
import { EventsModule } from '../events/events.module';

@Global()
@Module({
    imports: [EventsModule],
    providers: [RedisService],
    exports: [RedisService],
})
export class RedisModule { }
