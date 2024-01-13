import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './services/user/user.service';
import { UserModule } from './modules/user/user.module';
import { UserController } from './controllers/user/user.controller';
import { ProductModule } from './modules/product/product.module';
import { ProductService } from './services/product/product.service';
import { ProductController } from './controllers/product/product.controller';
import { OrderModule } from './modules/order/order.module';
import { OrderService } from './services/order/order.service';
import { OrderController } from './controllers/order/order.controller';
import { ProductLineModule } from './modules/product-line/product-line.module';
import { ProductLineService } from './services/product-line/product-line.service';
import { ProductLineController } from './controllers/product-line/product-line.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'product--store--db',
      synchronize: true,
      logging: true,
      entities: [],
      subscribers: [],
      migrations: [],
    }),
    UserModule,
    ProductModule,
    OrderModule,
    ProductLineModule,
  ],
  controllers: [
    AppController,
    UserController,
    ProductController,
    OrderController,
    ProductLineController,
  ],
  providers: [
    AppService,
    UserService,
    ProductService,
    OrderService,
    ProductLineService,
  ],
})
export class AppModule {}
