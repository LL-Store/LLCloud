import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'

const rootPath = require('path').join(__dirname, '../client')

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
