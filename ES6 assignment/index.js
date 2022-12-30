class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return `User name is ${this.name}`;
    }
    getEmail() {
        return `User email is ${this.email}`;
    }

    getAge() {
        return `User age is ${this.age}`;
    }
}

class Developer extends User {
    constructor(name, email, age, skills) {
        super(name, email, age);
        this.skills = skills;
    }
}

const developer = new Developer('kanjasmita', 'kdash@gmail.com', 27, [
    'html',
    'css',
    'js',
]);
document.write(developer.getName()); //User name is kanjasmita
document.write("<br>");
document.write(developer.getEmail()); //User email is kdash@gmail.com
document.write("<br>");
document.write(developer.getAge()); //User age is 27
document.write("<br>");
document.write(developer.skills); //['html','css','js']