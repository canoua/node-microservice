import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
// import DatabaseModulk

@Module({
  imports: [UserModule, ConfigModule.forRoot()],
})
export class AppModule {}
