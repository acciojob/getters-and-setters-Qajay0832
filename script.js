//complete this code
class Person {
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	getName(){
		return name
	}
	setAge(newage){
		this.age=newage;
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
