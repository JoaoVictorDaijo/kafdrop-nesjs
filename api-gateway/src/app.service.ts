import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { EnviarKafkaDto } from './enviar-kafka.dto';
import { LimpezaCreatedEvent } from './limpezaCreatedEvent';

@Injectable()
export class AppService {
  constructor(
    @Inject('ALGUM_INJECTION_TOKEN')
    private readonly limpezaClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  // @Salmo olha que interessante já da pra dar destruct no parametro do método não sabia disso...
  enviarKafka({ idUsuario, umNumero, dado }: EnviarKafkaDto) {
    // Emite o pedido para limpar dos dados
    this.limpezaClient.emit(
      'limpeza_request',
      new LimpezaCreatedEvent('1', idUsuario, umNumero, dado),
    );
  }
}
