/*
 * Created by zhifu on 16/4/14.
 */

/*class Student {
    fullName: string;
    constructor(public firstName, public middleIntial, public lastName) {
        this.fullName = firstName + ' ' + middleIntial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

var user = new Student('zhifu', 'M.', 'liu');

document.body.innerHTML = greeter(user);*/


/**
 * Created by zhifu on 16/4/14.
 */

class Student {
    public firstName: string;
    public lastName: string;
    public fullName: string;
    public middleIntial: string;
    constructor(firstName, middleIntial, lastName) {
        this.firstName = firstName;
        this.middleIntial = middleIntial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleIntial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

var user = new Student('zhifu', 'M.', 'liu');

document.body.innerHTML = greeter(user);