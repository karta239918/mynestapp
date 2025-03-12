import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { CatService } from './cat.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'

// process.env.PORT/cat  <- 這是定義路由
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return this.catService.create(createCatDto)
  }

  @Get()
  findAll() {
    console.log('來自 /cat')
    return this.catService.findAll()
  }

  @Get('abcd/*')
  findAllForAbcd() {
    return this.catService.findAll() // 調用同一個 service 方法
  }

  //$ PORT/cat/breed
  @Get('breed')
  findBreed() {
    return this.catService.findBreed()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id)
  }
}
