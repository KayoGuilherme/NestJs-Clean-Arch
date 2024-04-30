import { Module } from '@nestjs/common';
import { EnvConfigModule } from './shared/infraestructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';


@Module({
  imports: [EnvConfigModule, UsersModule]
})


export class AppModule { }
