// Adapter is a design pattern that allows objects with incompatible interfaces to work together
// by converting the interface of one object into an interface expected by another object.

// The BankTransfer class represents a system for making bank transfers.
class BankTransfer {
  initiateTransfer(amount) {
    let calculatedAmount = this.calculateFee(amount);
    console.log(`Initiating bank transfer: $${calculatedAmount}`);
  }
  calculateFee(amount) {
    return amount * 1.02;
  }
}

// The WalletTransfer class represents a system for making wallet transfers.
class WalletTransfer {
  processTransfer(amount) {
    console.log(`Processing wallet transfer: $${amount}`);
  }
}

// The TransferAdapter class acts as an adapter, allowing us to use the methods of WalletTransfer
// as if it were BankTransfer.
class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem;
  }
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    this.transferSystem.processTransfer(calculatedAmount);
  }
  calculateFee(amount) {
    return amount * 1.2;
  }
}
console.log("Task 5 ====================================");

// Creating instances of BankTransfer
const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

const purchase2 = new BankTransfer();
purchase2.initiateTransfer(10);
