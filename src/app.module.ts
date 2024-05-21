import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [AdminModule, UserModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
