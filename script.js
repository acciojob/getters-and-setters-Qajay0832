//complete this code
class Person {
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	get name(){
		return name
	}
	set age(age){
		this.age=age;
	}
}

class Student extends Person {
	constructor(name,age);
	super();
	study(){
		console.log(name+" is studying")
	}
	
	
}

class Teacher extends Person {
	constructor(name,age);
	super();
	teach(){
		console.log(name+" is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
