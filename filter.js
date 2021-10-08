//Reproduzir o filter, sem usar filter
function newStudent(name, age) {
    return {name, age};
}

let students = [
    newStudent('Mario', 44),
    newStudent('Pedro', 24),
    newStudent('Jairo', 32),
    newStudent('Caio', 23)
]

// Sem filter 
let under30 = [];
function filterUnder30(students, newList){
    for(let student of students){
        if (student.age < 30){
            newList.push(student);
        }
    }
}
filterUnder30(students, under30);
console.log(under30);

//Com filter
const filterOver30=obj=> obj.age >= 30;

let over30 = students.filter(filterOver30)
console.log(over30);

