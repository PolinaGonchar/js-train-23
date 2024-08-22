// The Visitor is a programming pattern that allows adding new operations to a group of objects
// without changing the objects themselves.
// The Visitor separates the algorithm from the representation of objects, which allows adding new operations
// without modifying the classes of these objects.

// The Letter class represents a letter object with a title and text.
class Letter {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}

// The Picture class represents an image object with a title and size.
class Picture {
  constructor(title, size) {
    this.title = title;
    this.size = size;
  }
}

// The Movie class represents a movie object with a title and duration.
class Movie {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }
}

// The Portfolio class represents a collection of objects such as letters, images, and movies.
class Portfolio {
  elements = [];
  addElement(element) {
    this.elements.push(element);
  }
  readLetter(letter) {
    console.log(`Letter: ${letter.title}, Length: ${letter.text.length} characters`);
  }
  readPicture(picture) {
    console.log(`Picture: ${picture.title}, Size: ${picture.size} KB`);
  }
  readMovie(movie) {
    console.log(`Movie: ${movie.title}, Duration: ${movie.duration} minutes`);
  }
  readElements() {
    for (const element of this.elements) {
      if (element instanceof Letter) {
        this.readLetter(element);
      } else if (element instanceof Picture) {
        this.readPicture(element);
      } else if (element instanceof Movie) {
        this.readMovie(element);
      }
    }
  }
}

console.log("Task 4 ====================================");

// Creating an instance of the Portfolio class.
const myPortfolio = new Portfolio();

// Creating different objects.
const letter = new Letter("My Letter", "Hello, this is a letter.");
const picture = new Picture("My Picture", 2048);
const movie = new Movie("My Movie", 120);

// Adding objects to the portfolio.
myPortfolio.addElement(letter);
myPortfolio.addElement(picture);
myPortfolio.addElement(movie);

// Outputting all objects in the portfolio.
console.log(myPortfolio.elements);

// Reading information about all objects in the portfolio.
myPortfolio.readElements();
