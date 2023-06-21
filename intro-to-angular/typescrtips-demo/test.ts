let isEven: boolean = false;
let num: number = 4;
let str: string = "";


type User = {
    name: string;
    age: number;
}
const peshoUser = {
    name: "Pesho",
    age: 21,
} as User;

interface User2 {
    firstName: string;
    id: number;
}

class AnotherUserClass implements User2 {
firstName: string;
id: number;

getUserName: () => string;
}

const user2List = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Mitko', id: 2 },
    { firstName: 'Maria', id: 3 }
] as User2[];

peshoUser.age = 1;


user2List.forEach(({ firstName, id }) => {
    console.log(`${id}: ${firstName}`);
});


class Human {
   speak(){
    console.log("hello!");
    
   }
}


class Person extends Human{
    private name: string;
    age: number;
    constructor(name: string, age: number){
        super();
        this.name = name;
        this.age = age;
    }
}

const personIvan = new Person("Ivan", 33);
personIvan.age = 45;
personIvan.speak();


function getIdentity<T>(id: T) {
    console.log(id);
    
}

getIdentity<string>("123");
getIdentity<number>(123);

enum PaymentStatus {
Faild,
Successful,
Pending,
}

PaymentStatus.Faild;