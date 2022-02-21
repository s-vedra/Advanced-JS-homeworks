//get the button from the HTML
let buttonOne = document.getElementById("addAcademy");
let button = document.getElementById("completeSubject");
let buttonThree = document.getElementById("addSubject");

//create academy object
function Academy(name, students, subjects, start, end) {
  this.name = name;
  this.students = students || [];
  this.subjects = subjects || [];
  this.start = start;
  this.end = end;
  this.numberClasses = this.subjects.length * 10;
  this.printStudents = function printStudents() {
    return this.students.map((student) => {
      return student;
    });
  };
  this.printSubjects = function printSubjects() {
    return this.subjects.map((subject) => {
      return subject;
    });
  };
}

//create subject object
function Subject(title, isElective, academy) {
  this.title = title;
  this.numberClasses = 10;
  this.isElective = isElective;
  this.academy = academy;
  this.students = [];
  this.overrideClasses = function overrideClasses(num) {
    if (num >= 3) {
      return (this.overrideClasses = num);
    }
  };
}

//create student object
function Student(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;
  //when start academy is called push the student in the academy.student property
  this.startAcademy = function startAcademy(input) {
    buttonOne.addEventListener("click", () => {
      return (this.academy = input) + academy.students.push(this);
    });
  };
  //when start subject is called push the input in the current subject property, push the student into the subject.student property and when a new subject is added
  //add the previus subject to the completed subject array
  this.startSubject = function startSubject(input, subject) {
    buttonThree.addEventListener("click", () => {
      if (
        this.academy &&
        this.academy.subjects.some((sb) => sb.title == input)
      ) {
        return (this.currentSubject = input + subject.students.push(this));
      } else {
        throw new Error();
      }
    });
    button.addEventListener("click", () => {
      return (
        this.completedSubjects.push(this.currentSubject) +
        (this.currentSubject = input)
      );
    });
  };
}

let academy = new Academy("someAcc", [], [], "October", "November");
academy.printStudents();
let basicJS = new Subject("Basic JS", false, academy);
let advancedJS = new Subject("Advanced JS", false, academy);
let basicCSharp = new Subject("Basic CSharp", true, academy);

console.log(academy);
academy.subjects = [basicJS, advancedJS, basicCSharp];
let student = new Student("First", "Student", 22);

console.log(student);
student.startAcademy(academy);

student.startSubject("Advanced JS", advancedJS);
let randomStudent = new Student("Second", "Student", 22);
randomStudent.startAcademy(academy);

randomStudent.startSubject("Basic JS", basicJS);
randomStudent.startSubject("Basic CSharp", basicCSharp);
student.startSubject("Basic CSharp", basicCSharp);
console.log(randomStudent);
console.log(basicJS);
console.log(basicCSharp);
console.log(advancedJS);
