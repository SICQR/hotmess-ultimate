/**
 * Hotmess Ultimate - Main Entry Point
 */

class HotmessUltimate {
  private name: string;

  constructor(name: string = "Hotmess Ultimate") {
    this.name = name;
  }

  public greet(): string {
    return `Hello from ${this.name}!`;
  }

  public getFeatures(): string[] {
    return [
      "Feature 1: TypeScript support",
      "Feature 2: Build system with npm scripts",
      "Feature 3: Modular architecture"
    ];
  }

  public run(): void {
    console.log(this.greet());
    console.log("\nAvailable Features:");
    this.getFeatures().forEach((feature, index) => {
      console.log(`  ${index + 1}. ${feature}`);
    });
  }
}

// Run the application
const app = new HotmessUltimate();
app.run();

export default HotmessUltimate;
