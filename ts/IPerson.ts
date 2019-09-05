import { Person } from "./Person";

interface IPerson {
    createPerson(person: Person): void;
    updatePerson(person: Person): Person;
    deletePerson(person: Person): void;
    getPeople(): Person[];
    getPerson(id:number):Person;
}


export { IPerson }