import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.service';
import { MessageRepository } from './messages.repository';

/** 
 * @providers cosas que puedo usaer por medio de la inyeccion de dependencias en el controler principal
*/

@Module({
  controllers: [MessagesController],

  providers: [
    MessageService,
    MessageRepository
  ]
})

export class MessagesModule { }
