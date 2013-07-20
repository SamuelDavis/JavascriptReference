/*
Use jQuery to make sure all this code runs
*after* all the other JS is loaded 
-- Making all classes available for testing.
*/
$(document).ready(function() {
	/*
	A utility class containing general-purpose,
	time-saving --largely boilerplate-creating-- methods.
	var utility = new Utility();
	*/
	var utility = new Utility();


	utility.consoleHeader("INHERITANCE");

	/*
	Because a third argument is not given,
	Parent's setProperty3 method will stop
	its default value being overwritten
	*/
	var parent = new Parent("a", 2);
	console.log(parent);

	var child = new Child(3, 0);
	/*
	Note: child.property2 is null.
	This is because property2 is defined
	in the parent constructor,
	but a third argument was not given to the .call()
	method in the Child constructor.
	No default value was defined, so it becomes null.
	console.log(child);
	*/
	console.log(child);

	/*
	Note: There is no way to access the Parent class
	from the Child class. Both these variables are undefined!
	*/
	console.log(child.prototype);
	console.log(child.parent);

	/*
	Because the Child class' prototype variable is set
	to Parent, it can call Parent methods
	and reference Parent properties.
	*/
	console.log(child.getProperty3());

	/*
	UTILITY CLASS EXAMPLES: generating getters/setters
	*/
	utility.consoleHeader("UTILITY: generateGetSet()");

	/* A quick object-creation to test the generateGetSet utility method */
	function Test(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	/*
	This method generates the prototype methods below.
	Note: it is reliant on the types of the object's properties
	when the object is fed into the method.
	*/
	utility.generateGetSet(test, "Test", true);
	Test.prototype.getA = function() {
		return this.a;
	};
	Test.prototype.setA = function(val) {
		if(typeof val === "string") {
			this.a = val;
		}
	};
	Test.prototype.getB = function() {
		return this.b;
	};
	Test.prototype.setB = function(val) {
		if(typeof val === "string") {
			this.b = val;
		}
	};
	Test.prototype.getC = function() {
		return this.c;
	};
	Test.prototype.setC = function(val) {
		if(typeof val === "boolean") {
			this.c = val;
		}
	};

	var test = new Test(0, "1", true);
	console.log(test);
	/*
	because utility.generateGetSet's third argument was "true"
	the above setters perform typechecking.
	*/
	test.setA(12);
	console.log(test); //Because of the typechecking, test.a's value didn't change
});