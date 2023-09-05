// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
    }
    displayInfo() {
        console.log(`name: ${this.name}, age: ${this.age}, grade: ${this.grade}`);
    }
}

const student1 = new Student("Билалов", 10, "5")
student1.displayInfo();

const student2 = new Student("Лавренов", 16, "10");
student2.displayInfo();