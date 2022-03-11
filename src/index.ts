import Ampulheta from "./models/Ampulheta";

const ON_DATA = "data";

class Main {
  constructor() {
    process.stdout.write("Informe a dimensão do quadrado: ");
    process.stdin.on(ON_DATA, this.onReceiveData);
  }

  private onReceiveData(buffer: Buffer) {
    const data = buffer.toString().replace(/[\r\n]/g, ""); /* expressão regular */

    try {
      const square = new Ampulheta().setSize(data).toModel().traceBorders();

      square.print();
    } catch (err) {
      console.error(err);
    }
  }
}

new Main();
