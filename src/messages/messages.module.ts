import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  // Providers are dependencies that we mark with @Injectable
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
