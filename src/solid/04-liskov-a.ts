import { Tesla, Audi, Toyota, Honda, Volvo, Ford } from "./04-liskov-b";

(() => {
  const printCarSeats = (
    cars: (Tesla | Audi | Toyota | Honda | Volvo | Ford)[]
  ) => {
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(7),
    new Ford(3),
  ];

  printCarSeats(cars);
})();

/*

Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustitudia por cualquier instancia de U  sin alterar las propiedades del sistema

*/
