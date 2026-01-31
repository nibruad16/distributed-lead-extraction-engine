import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
    constructor(
        private prisma: PrismaService,
        private redis: RedisService,
    ) { }

    async createJob(createJobDto: CreateJobDto) {
        const job = await this.prisma.scrapingJob.create({
            data: {
                userId: createJobDto.userId,
                target: createJobDto.target,
                status: 'PENDING',
            },
        });

        // Push to Redis queue for worker
        await this.redis.pushToQueue('scraping:queue', {
            jobId: job.id,
            target: job.target,
        });

        return job;
    }

    async getAllJobs() {
        return this.prisma.scrapingJob.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50,
            include: {
                _count: {
                    select: { leads: true },
                },
            },
        });
    }

    async getJobById(id: string) {
        const job = await this.prisma.scrapingJob.findUnique({
            where: { id },
            include: {
                leads: true,
                events: {
                    orderBy: { createdAt: 'desc' },
                    take: 100,
                },
            },
        });

        if (!job) {
            throw new NotFoundException(`Job with ID ${id} not found`);
        }

        return job;
    }

    async getJobLeads(id: string) {
        return this.prisma.lead.findMany({
            where: { jobId: id },
            orderBy: { createdAt: 'desc' },
        });
    }
}
