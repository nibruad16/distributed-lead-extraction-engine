import { IsString, IsNotEmpty } from 'class-validator';

export class CreateJobDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    target: string;
}
