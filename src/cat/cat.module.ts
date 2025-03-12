import { Module } from '@nestjs/common'
import { CatService } from './cat.service'
import { CatController } from './cat.controller'

@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService] // 這裡導出了 CatService，可以給其他模組使用。
})
export class CatModule {}
