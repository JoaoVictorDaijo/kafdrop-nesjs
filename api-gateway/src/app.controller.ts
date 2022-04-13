import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EnviarKafkaDto } from './enviar-kafka.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  enviarKafka(@Body() enviarKafkaDto: EnviarKafkaDto) {
    this.appService.enviarKafka(enviarKafkaDto);
  }
}
