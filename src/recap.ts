const myName = 'Nicolas';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 5);

class Persona {
  //declaracion de atributos colocarlos directamente en el constructor.
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const kev = new Persona(15, 'kev');
kev.getSummary();
