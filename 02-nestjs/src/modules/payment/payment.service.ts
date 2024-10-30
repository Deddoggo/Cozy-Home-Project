import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './schemas/payment.schema';
import { User, UserDocument } from '../users/schemas/user.schema';
import { Model } from 'mongoose';
import aqp from 'api-query-params';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  // Create a new payment
  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    // Check if the user exists
    const userExists = await this.userModel.exists({ _id: createPaymentDto.user });
    if (!userExists) {
      throw new NotFoundException(`User with ID ${createPaymentDto.user} not found`);
    }

    // Handle COD-specific conditions
    if (createPaymentDto.paymentMethod === 'COD') {
      createPaymentDto.provider = undefined;
      createPaymentDto.accountNumber = undefined;
      createPaymentDto.expiredDate = undefined;
    }

    const newPayment = new this.paymentModel(createPaymentDto);
    return newPayment.save();
  }

  // Find all payments with pagination, sorting, and filtering
  async findAll(query: string, current: number = 1, pageSize: number = 10) {
    const { filter, sort } = aqp(query);

    // Adjust filtering if there's a general search query
    if (filter.query) {
        filter.$or = [
            { paymentMethod: { $regex: `.*${filter.query}.*`, $options: "i" } },
            { provider: { $regex: `.*${filter.query}.*`, $options: "i" } },
            { accountNumber: { $regex: `.*${filter.query}.*`, $options: "i" } },
        ];
        delete filter.query;
    }

    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    const totalItems = await this.paymentModel.find(filter).countDocuments();
    const totalPages = Math.ceil(totalItems / pageSize);

    const skip = (current - 1) * pageSize;
    const results = await this.paymentModel
        .find(filter)
        .limit(pageSize)
        .skip(skip)
        .sort(sort as any);

    return { results, totalItems, totalPages };
  }

  // Find a single payment by ID
  async findOne(id: string): Promise<Payment> {
    const payment = await this.paymentModel.findById(id).exec();
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  // Update a payment by ID
  async update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<Payment> {
    if (updatePaymentDto.user) {
      const userExists = await this.userModel.exists({ _id: updatePaymentDto.user });
      if (!userExists) {
        throw new NotFoundException(`User with ID ${updatePaymentDto.user} not found`);
      }
    }

    const updatedPayment = await this.paymentModel.findByIdAndUpdate(id, updatePaymentDto, { new: true }).exec();
    if (!updatedPayment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return updatedPayment;
  }

  // Delete a payment by ID
  async remove(id: string): Promise<Payment> {
    const deletedPayment = await this.paymentModel.findByIdAndDelete(id).exec();
    if (!deletedPayment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return deletedPayment;
  }
}
