import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) { }

    @Post()
    async createJob(@Body() createJobDto: CreateJobDto) {
        return this.jobsService.createJob(createJobDto);
    }

    @Get()
    async getAllJobs() {
        return this.jobsService.getAllJobs();
    }

    @Get(':id')
    async getJob(@Param('id') id: string) {
        return this.jobsService.getJobById(id);
    }

    @Get(':id/leads')
    async getJobLeads(@Param('id') id: string) {
        return this.jobsService.getJobLeads(id);
    }
}
