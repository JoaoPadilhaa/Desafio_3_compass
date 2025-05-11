import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosCachorroService } from './produtos-cachorro.service';
import { CreateProdutosCachorroDto } from './dto/create-produtos-cachorro.dto';
import { UpdateProdutosCachorroDto } from './dto/update-produtos-cachorro.dto';

@Controller('produtos-cachorro')
export class ProdutosCachorroController {
  constructor(private readonly service: ProdutosCachorroService) {}
  
  @Post()
  create(@Body() dto: CreateProdutosCachorroDto) {
    console.log(CreateProdutosCachorroDto);
    return this.service.create(dto);
  }
  
  @Get()
  findAll() {
    return this.service.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProdutosCachorroDto) {
    return this.service.update(+id, dto);
  }
  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
    
}
