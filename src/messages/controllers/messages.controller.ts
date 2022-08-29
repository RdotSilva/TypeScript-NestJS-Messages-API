import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';
import { UpdateMessageDto } from '../dtos/update-message.dto';
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
    return this.messagesService.updateMessage(id, body.content);
  }  
  
  @Delete(':id')
  deleteMessage(@Param(id) id: string) {
    // TODO: Add service
  }
}
