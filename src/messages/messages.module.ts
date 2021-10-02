import { Module } from '@nestjs/common'
import { MessagesService } from './message.service'
import { MessagesController } from './messages.controller'
import { MessagesRepository } from './messages.repository'

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
