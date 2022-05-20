import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto, UpdateProductoDto } from 'src/dtos/products.dto';
import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'esto es un producto 1',
      price: 200,
      stock: 100,
      image: '/p1.png',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const prod = this.products.find((item) => item.id == id);
    if (!prod) {
      //MANEJAR DE MANIPULAR EL ERROR
      throw new NotFoundException('El producto no existe.');
    }
    return prod;
  }

  create(payload: CreateProductoDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductoDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id == id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }

    return null;
  }

  delete(id: number) {
    const productUpdate = this.findOne(id);
    if (productUpdate) {
      this.products = this.products.filter((item) => item.id != id);
      return this.products;
    }
  }
}
