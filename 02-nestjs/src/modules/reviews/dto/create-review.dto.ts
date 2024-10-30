import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {

    @IsMongoId()
    @IsNotEmpty()
    user: string;

    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;

    @IsOptional()
    @IsString()
    image?: string;

    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsMongoId()
    @IsNotEmpty()
    shopItem: string;
}
