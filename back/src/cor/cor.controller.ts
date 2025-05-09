import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorService } from './cor.service';
import { CreateCorDto } from './dto/create-cor.dto';
import { UpdateCorDto } from './dto/update-cor.dto';

@Controller('cor')
export class CorController {
  constructor(private readonly corService: CorService) {}

  @Post()
  create(@Body() createCorDto: CreateCorDto) {
    return this.corService.create(createCorDto);
  }

  @Get()
  findAll() {
    return this.corService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorDto: UpdateCorDto) {
    return this.corService.update(+id, updateCorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corService.remove(+id);
  }
}
