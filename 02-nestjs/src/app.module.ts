import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from '@/modules/users/users.module';
import { BlogsModule } from '@/modules/blogs/blogs.module';
import { OrderDetailModule } from '@/modules/order.detail/order.detail.module';
import { OrdersModule } from '@/modules/orders/orders.module';
import { ReviewsModule } from '@/modules/reviews/reviews.module';
import { PaymentModule } from '@/modules/payment/payment.module';
import { ShopItemsModule } from '@/modules/shop.items/shop.items.module';
import { ShopItemsDetailsModule } from '@/modules/shop.items.details/shop.items.details.module';
import { CartItemsModule } from '@/modules/cart.items/cart.items.module';
import { CategoriesModule } from '@/modules/categories/categories.module';


@Module({
  imports: [
    UsersModule,
    BlogsModule,
    OrderDetailModule,
    OrdersModule,
    ReviewsModule,
    PaymentModule,
    ShopItemsModule,
    ShopItemsDetailsModule,
    CartItemsModule,
    CategoriesModule,
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
