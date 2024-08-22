// Composite — is a programming pattern that allows creating an object structure in the form of a tree,
// where each object can be either a separate element or a group of objects.
// This structure is called "tree-like" due to the "one-to-many" hierarchy.

// The ContentContainer class is used to manage a list of nested content elements.
class ContentContainer {
  elements = [];
  addElement(element) {
    this.elements.push(element);
  }
  removeElements(element) {
    let index = this.elements.indexOf();
    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }
}

// The Message class, which extends the ContentContainer class. It is used to create messages with text.
class Message extends ContentContainer {
  constructor(content) {
    super();
    this.content = content;
  }
  display() {
    console.log(`${this.content}`);
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].display();
    }
  }
}

// The Article class, which extends the ContentContainer class. It is used to create an article with nested elements.
class Article extends ContentContainer {
  constructor(title) {
    super();
    this.title = title;
  }
  display() {
    console.log(`Article: ${this.title}`);
    for (const el of this.elements) {
      el.display();
    }
  }
}

console.log("Task 1 ====================================");

// Creating an Article object with the title "Educational Article"
const article = new Article("Educational Article");

// Adding messages to the article
article.addElement(new Message("Very useful article"));
article.addElement(new Message("Thanks for the great material!"));

// Adding a nested message to the first message in the article
article.elements[0].addElement(new Message("Reply: I agree!"));

// Displaying information about the article and all its nested elements
article.display();

// Displaying the array of nested elements of the article
console.log(article.elements);
