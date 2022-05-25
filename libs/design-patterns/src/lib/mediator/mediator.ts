export class ChatRoom {
  logMessage(user: User, message: string): void {
    const time = new Date();
    const sender = user.getName();

    console.info(`${time.toISOString()} [${sender}]: ${message}`);
  }
}

export class User {
  constructor(public name: string, public chatroom: ChatRoom) {}

  getName(): string {
    return this.name;
  }

  send(message: string): void {
    this.chatroom.logMessage(this, message);
  }
}

const chatRoom = new ChatRoom();

const user1 = new User('John Doe', chatRoom);
const user2 = new User('Jane Doe', chatRoom);

// Users don't send messages to one another, messages are sent to the chatroom (the mediator)
user1.send('hi');
user2.send('hello');
