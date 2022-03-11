export default class Ampulheta {
  private size: number = 0;
  private lines: Array<string | null>[] = [];
  private diagonal_principal: number[]=[];
  private diagonal_secundaria: number[]=[];

  public setSize(n: string) {
    if (/^[^\d]$/.test(n)) {
      throw new TypeError("Tamanho precisa ser um número");
    }

    if (parseInt(n)<20) {
      throw new Error("Tamanho precisa ser maior ou igual a 20");
    }

    this.size = parseInt(n);

    return this;
  }

  public toModel() {
    for (let i = 0; i < this.size; i++) {
      const line: string[] = new Array(this.size);

      line.fill(" ");
      this.cruz(i,line);
      this.preenchimento(i,line);
      this.lines.push(line);
    }

    return this;
  }

  private cruz(i:number,line:string[]){
        const ponto1=i;
        const ponto2=this.size-i-1;

        line[ponto1]='#';
        line[ponto2]='#';
        this.diagonal_principal.push(ponto1);
        this.diagonal_secundaria.push(ponto2);

  }
  private preenchimento (i:number,line:string[]){
         line.fill('#',this.diagonal_principal[i],this.diagonal_secundaria[i]);

  }

  public traceBorders() {
    const TOP_LINE_OF_SQUARE = 0;
    const BOTTOM_LINE_OF_SQUARE = this.lines.length - 1;

    for (let i in this.lines) {
      const line = this.lines[i];
      const lineIndex = parseInt(i);

      if (
        lineIndex === TOP_LINE_OF_SQUARE ||
        lineIndex === BOTTOM_LINE_OF_SQUARE
      ) {
        line.fill("#");
      }

      line[0] = line[line.length - 1] = "#";

      // line.push("\n");
    }
    

    return this;
  }

  public print() {
    for (let line of this.lines) {
      console.log(line.toString().replace(/,/g, ""));
    }
  }
}
