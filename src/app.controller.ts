import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `Hola mundo`;
  }

  @Get('nuevo')
  newEnpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return `con /as/`;
  }

  @Get('products/filter')
  getProductFilter() {
    return `yo soy el filter`;
  }

  //esta es otra forma de obtener el parametro en la ruta
  @Get('products2/:id')
  getProduct2(@Param('id') params: string) {
    return `El id es: ${params}`;
  }

  //recibir varios parametros
  @Get('categories/:id/productos/:productoId')
  getCategory(
    @Param('id') id: string,
    @Param('productoId') productoId: string,
  ) {
    return `El id es: ${id} y el id del producto es: ${productoId}`;
  }
}
