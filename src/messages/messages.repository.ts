import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    // Read plain text from json file
    const contents = await readFile('messages.json', 'utf8');

    // Parse plain text to object
    const messages = JSON.parse(contents);

    // Return the message by ID
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    // Generate a random ID to use for the incoming content
    const id = Math.floor(Math.random() * 999);

    // Update the messages object with the new content and ID
    messages[id] = { id, content };

    // Add the new data to the JSON file
    await writeFile('messages.json', JSON.stringify(messages));
  }

  async updateMessage(content: string, id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    
    messages[id] = { content };
    await writeFile('messages.json', JSON.stringify(messages));
  }

  async deleteMessage(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const message = messages[id];

    if (message) {
      delete messages[id];
    } else {
      throw new NotFoundException('message not found');
    }
   }

}
