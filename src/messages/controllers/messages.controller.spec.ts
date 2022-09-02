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

  describe('getMessage', () => {
    it('should return a single message', async () => {
      const result = 'Hello World';
      jest.spyOn(repo, 'findOne').mockImplementation(() => result);

      expect(await controller.getMessage('1')).toBe(result);
    });
  });

  describe('createMessage', () => {
    it('should create and return a message', async () => {
      const result = { id: '1', content: 'Hello World' };
      jest.spyOn(repo, 'create').mockImplementation(() => result);

      expect(await controller.createMessage({ content: 'Hello World' })).toBe(
        result,
      );
    });
  });

  describe('updateMessage', () => {
    it('should update and return a message', async () => {
      const result = { id: '1', content: 'Hello World Updated' };
      jest.spyOn(repo, 'updateMessage').mockImplementation(() => result);

      expect(
        await controller.updateMessage('1', { content: 'Hello World Updated' }),
      ).toBe(result);
    });
  });
});
