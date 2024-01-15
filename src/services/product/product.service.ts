import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dtos/product/update-product.dto';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  addNewProduct(product: Product) {
    try {
      const newProduct = this.repo.create(product);
      return this.repo.save(newProduct);
    } catch (error) {
      console.dir('error adding new product', error);
      throw new Error(error);
    }
  }

  async findProductById(id: number) {
    const product = await this.repo.findOne({ where: { id } });
    if (!product)
      throw new NotFoundException(`Product with id: ${id} not found`);
    return product;
  }

  async findAll() {
    try {
      const product = await this.repo.find();
      return product;
    } catch (error) {
      console.log('error all products', error);
      throw new Error(error);
    }
  }

  async updateProduct(id: number, product: ProductDto) {
    const savedProduct = await this.repo.findOne({ where: { id } });
    if (!savedProduct)
      throw new NotFoundException(`Product with id: ${id} not found`);

    try {
      Object.assign(savedProduct, product);
      return this.repo.save(product);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(id: number) {
    const savedProduct = await this.repo.findOne({ where: { id } });
    if (!savedProduct)
      throw new NotFoundException(`Product with id: ${id} not found`);
    try {
      return this.repo.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
