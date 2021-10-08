//Reproduzir o map, sem usar map
function newStudent(name, lastName, age) {
    return {name, lastName, age};
}

let students = [
    newStudent('Mario','Cabral',  44),
    newStudent('Pedro','Caetano', 24),
    newStudent('Jairo','Vermlho', 32),
    newStudent('Caio', 'Souza',23)
]


// sem usar map
let studentsFullName = [];
console.log('SEM MAP');
function getFullName(students, newArray){
    for(let student of students){
        newArray.push(student.name + ' ' + student.lastName);
    }
}
getFullName(students, studentsFullName);
console.log(studentsFullName);

console.log(' ');

// usando MAP
console.log('COM MAP');
const studentFullNameMap = students.map(getFullNameMap);
function getFullNameMap(student){
    return [student.name, student.lastName].join(' ');
}
console.log(studentFullNameMap);