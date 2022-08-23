import { readFile, writeFile } from 'fs/promises';

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

  async create(message: string) {}
}
