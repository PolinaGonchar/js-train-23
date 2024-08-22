// The Template Method is a programming pattern that defines the overall structure of an algorithm,
// leaving certain implementation steps to subclasses.
// The template class defines the main logic of the algorithm, while subclasses can modify or extend individual steps.

// The TeaMaker class is responsible for the general actions required to make tea.
class TeaMaker {
  makeTea() {
    this.boilWater();
    this.addTeaLeaves();
    this.#steepTea();
    this.pourIntoCup();
    this.addCondiments();
    this.serveTea();
  }
  boilWater() {
    console.log(`Boiling water...`);
  }
  addTeaLeaves() {
    console.log(`Adding tea leaves...`);
  }
  #steepTea() {
    console.log("Steeping the tea...");
  }

  pourIntoCup() {
    console.log("Pouring tea into the cup...");
  }

  // The addCondiments method is left empty - it can be overridden in subclasses.
  addCondiments() {}
  
  serveTea() {
    console.log(`Tea is served!`);
  }
}

// The GreenTeaMaker class is a subclass of the TeaMaker class and adds ingredients for green tea.
class GreenTeaMaker extends TeaMaker {
  addCondiments() {
    console.log(`Adding honey to make green tea.`);
  }
}

// The BlackTeaMaker class is a subclass of the TeaMaker class and adds ingredients for black tea.
class BlackTeaMaker extends TeaMaker {
  addCondiments() {
    console.log(`Adding honey to make black tea.`);
  }
}

console.log("Task 3 ====================================");

// Creating instances of the GreenTeaMaker and BlackTeaMaker classes.
const greenTeaMaker = new GreenTeaMaker();
greenTeaMaker.makeTea();

const blackTeaMaker = new BlackTeaMaker();
blackTeaMaker.makeTea();
