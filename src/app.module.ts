import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatModule } from './cat/cat.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CatModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
