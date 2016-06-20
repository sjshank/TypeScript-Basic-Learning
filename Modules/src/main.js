"use strict";
var StudentClass_1 = require("./StudentClass");
var student = new StudentClass_1["default"]("Saurabh", "Shankariya");
student.setAge(25);
student.setCollegeName("St. Vincent Pallotti");
document.getElementById('text2').innerHTML = student.getPersonDetails();
