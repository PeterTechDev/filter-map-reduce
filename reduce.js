// reduce, sem reduce

function newStudent(name, lastName, age) {
    return {name, lastName, age};
}

let students = [
    newStudent('Mario','Cabral',  44),
    newStudent('Pedro','Caetano', 24),
    newStudent('Jairo','Vermlho', 32),
    newStudent('Caio', 'Souza',23)
]

// sem reduce
const classAge =(total, student) => total += student.age;

function reduce(callback, acc) {
    total = 0;
    this.forEach(student =>{
        total += callback(acc, student);
    });
    return total
}

students.reduce = reduce;
console.log(students.reduce(classAge, 0));

//com reduce 
console.log('com reduce');

const callback=(total, student)=> total + student.age;
const totalAge = students.reduce(callback, 0);
console.log(totalAge);