export class Client<T> {
  id?: T;
  name: string;
  age: string;
  
  constructor(id: T, name: string, age: string) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
