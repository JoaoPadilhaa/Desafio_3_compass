import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDeProdutoService } from './tipo-de-produto.service';
import { CreateTipoDeProdutoDto } from './dto/create-tipo-de-produto.dto';
import { UpdateTipoDeProdutoDto } from './dto/update-tipo-de-produto.dto';

@Controller('tipo-de-produto')
export class TipoDeProdutoController {
  constructor(private readonly service: TipoDeProdutoService) {}

  @Post()
  create(@Body() dto: CreateTipoDeProdutoDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateTipoDeProdutoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
