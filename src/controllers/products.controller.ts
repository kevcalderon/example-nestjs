import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  Req,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/services/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //PARAMETROS TIPO QUERY
  //la ruta se enviaria como productos?limit=100&offset=30&brand=honda
  @Get()
  getProducts(
    //en caso de que no tenga valor se puede enviar valores por defecto
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number,
    @Query('brand') brand: number,
  ) {
    return this.productsService.findAll();
  }

  @Get(':id')
  //REGRESANDO UN CODIGO DE ESTADO PARA LLEVAR UN CONTROL
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') params: any) {
    //Otra forma de pasar los parametros es variable.nombre que seria el parametro que se le esta pasando el valor.
    // return {
    //   message: `El id es: ${params.id}`,
    // };
    // response.status(200).send({
    //   message: `El id es: ${params.id}`,
    // });

    return this.productsService.findOne(params);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: number) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
