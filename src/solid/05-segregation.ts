interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Tucan implements Bird {
  swim(): void {
    throw new Error("This bird can't swim");
  }
  public fly() {}
  public eat() {}
  public run() {}
}

class Humminbird implements Bird {
  swim(): void {
    throw new Error("This bird can't swim");
  }
  public fly() {}
  public eat() {}
  public run() {}
}

class Ostrich implements Bird {
  swim(): void {
    throw new Error("This bird can't swim");
  }
  fly(): void {
    throw new Error("This bird can't fly");
  }
  eat(): void {}
  run(): void {}
}

class Penguin implements Bird {
  fly(): void {}
  eat(): void {}
  run(): void {}
  swim(): void {}
}
