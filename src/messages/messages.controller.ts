import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';//objeto de transferencia de datos
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(public messageService: MessageService) { }

    @Get()
    listMessage() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: createMessageDto) {
        return this.messageService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messageService.findOne(id);

        if (!message) throw new NotFoundException('message not found');

        return message;
    }

}
