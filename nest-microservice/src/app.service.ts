import { Injectable } from '@nestjs/common';
import { LimpezaCreatedEvent } from './limpezaCreatedEvent';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleLimpezaRequest(limpezaCreatedEvent: LimpezaCreatedEvent) {
    console.log(limpezaCreatedEvent);
  }
}
