import { IsMongoId, IsNotEmpty, IsNumber, IsString, Matches, ValidateIf } from 'class-validator';

export class CreatePaymentDto {

    @IsMongoId()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
    paymentMethod: string; // Should be either 'COD' or 'Bank'

    @ValidateIf(o => o.paymentMethod === 'Bank')
    @IsString()
    @IsNotEmpty()
    provider: string;

    @ValidateIf(o => o.paymentMethod === 'Bank')
    @IsString()
    @IsNotEmpty()
    accountNumber: string;

    @ValidateIf(o => o.paymentMethod === 'Bank')
    @IsNotEmpty()
    @Matches(/^(0[1-9]|1[0-2])\/\d{4}$/, { message: 'expiredDate must be in MM/YYYY format' })
    expiredDate: string;

    @IsNumber()
    @IsNotEmpty()
    totalPrice: number;
}
