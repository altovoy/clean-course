type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  verifyProductProperties() {
    for (const key in this) {
      const currentValue: any = this[key];
      switch (typeof currentValue) {
        case "string":
          if (currentValue.length <= 0) throw Error(`${key} is empty`);
          break;
        case "number":
          if (currentValue <= 0) throw Error(`${key} is zero`);
          break;
      }
    }
  }

  toString() {
    this.verifyProductProperties();
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue large pants", 10, "S");
  console.log(bluePants.toString());
})();
