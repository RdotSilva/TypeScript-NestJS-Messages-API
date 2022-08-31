import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './../messages.repository';
import { MessagesService } from '../messages.service';

describe('MessagesController', () => {
  let controller: MessagesController;
  let repo: MessagesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [MessagesService, MessagesRepository],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('listMessages', () => {
    it('should return an array of messages', async () => {
      const result = ['test'];
      jest.spyOn(repo, 'findAll').mockImplementation(() => result);

      expect(await controller.listMessages()).toBe(result);
    });
  });
});
