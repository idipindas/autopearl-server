import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { AuthModule } from './v1/modules/auth/auth.module';

@Module({
  imports: [AdminModule, UserModule, EmployeeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
