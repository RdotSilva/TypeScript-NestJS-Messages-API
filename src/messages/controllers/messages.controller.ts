import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto, UpdateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }

  @Put(':id/update')
  updateMessage(@Param('id') id: string, @Body() body: UpdateMessageDto) {
    return this.messagesService.updateMessage(id, body);
  }  
}
