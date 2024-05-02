import { Module } from '@nestjs/common';
import { EnvConfigModule } from './shared/infraestructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';
import { ExemploModule } from './exemplo/exemplo.module';


@Module({
  imports: [EnvConfigModule, UsersModule, ExemploModule]
})


export class AppModule { }
