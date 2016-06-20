import Student from "./StudentClass";

let student = new Student("Saurabh", "Shankariya");
student.setAge(25);
student.setCollegeName("St. Vincent Pallotti");
document.getElementById('text2').innerHTML = student.getPersonDetails();