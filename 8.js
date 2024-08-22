// Mediator is a design pattern that defines an object that encapsulates the interaction between a group of objects. 
// The mediator promotes loose coupling between these objects, allowing them to communicate through a centralized point.

// The User class represents a user who can send messages.
class User {
  constructor(name, messenger) {
    this.name = name;
    this.messenger = messenger;
  }
  sendMessage(message) {
    console.log(`${this.name} sent a message: ${message}`);
    this.messenger.sendMessage(`[${this.name}]: ${message}`);
  }
  receiveMessage(user, message) {
    console.log(`${this.name} received a message from ${user.name}: ${message}`);
  }
}

// The SMSMessenger class is responsible for sending messages via SMS.
class SMSMessenger {
  static sendMessage(message) {
    console.log(`Sent SMS: ${message}`);
  }
}

// The EmailMessenger class is responsible for sending messages via Email.
class EmailMessenger {
  static sendMessage(message) {
    console.log(`Sent Email: ${message}`);
  }
}

console.log("Task 8 ====================================");

// Creating two users - John and Jane - who send messages using different messengers.
const john = new User("John", SMSMessenger);
const jane = new User("Jane", EmailMessenger);

// John sends a message via SMS.
john.sendMessage("Hello!"); // Output: Sent SMS: [John]: Hello!

// Jane sends a message via Email.
jane.sendMessage("Hello!"); // Output: Sent Email: [Jane]: Hello!
