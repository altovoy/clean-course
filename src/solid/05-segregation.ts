interface Bird {
  eat(): void;
}

interface FlyerBird {
  fly(): void;
}

interface RunnerBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyerBird {
  public fly() {}
  public eat() {}
}

class Humminbird implements Bird, FlyerBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunnerBird {
  eat(): void {}
  run(): void {}
}

class Penguin implements Bird, RunnerBird, SwimmerBird {
  eat(): void {}
  run(): void {}
  swim(): void {}
}

/*
Detectar violación del principio de segregación de interfaz

+ Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov

*/
