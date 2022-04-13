import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ALGUM_INJECTION_TOKEN',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'limpeza',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'limpezaConsumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
