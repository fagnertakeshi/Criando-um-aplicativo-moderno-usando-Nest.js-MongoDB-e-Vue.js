import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';



@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://todoListApp:18QxHwdmdF1lsSwE@cluster0.vjwni.mongodb.net/Cluster0?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
