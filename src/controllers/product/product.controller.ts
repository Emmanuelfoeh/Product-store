import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductService } from 'src/services/product/product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  addProduct(@Body() product: Product) {
    return this.productService.addNewProduct(product);
  }

  @Get('/:id')
  fetchOneProduct(@Param('id') id: string) {
    return this.productService.findProductById(parseInt(id));
  }

  @Get()
  fetchAllProducts() {
    return this.productService.findAll()
  }

  @Patch('/:id')
  updateProduct(@Param('id') id: string, @Body() product: Product) {
    return this.productService.updateProduct(parseInt(id), product)
  }
}
