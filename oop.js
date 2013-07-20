/*
Define class constructor
The primary use of the constructor is:
Creating and initializing properties

However, all methods which are prototyped
will be defined only once, whereas methods
defined in the constructor will be
created every time an instance of the class
is created. It saves memory to prototype methods.
*/
function Parent(param1, param2, param3) {
	/* Initialize properties */
	this.property1 = param1;
	this.property2 = param2;

	//Set a default value for property 3.
	this.property3 = "Default property3 value.";

	/*
	Prototyped methods can be called at any time,
	unlike methods defined in the constructor
	which can only be called after they are defined.
	*/
	this.setProperty3(param3);
}

/*
Getter/setters allow you to apply additional logic,
ex. validating parameters before assigning them to properties
or formatting a property before returning it
*/
Parent.prototype.getProperty2 = function() {
	/*
	Getter/Setters don't actually need to
	do anything particular to the property.
	It is redundant to use a getter/setter
	this case, although it is generally good
	style to use them at all times.
	*/
	return this.param2;
}; //Don't forget you are *assigning* this function to a property. Use a semicolon!

Parent.prototype.setProperty2 = function(param2) {
	//If the user provided an inappropriate value, warn them of their mistake.
	if(typeof param2 != "integer" || param2 <= 3)
		return "Property2 must be an integer greater than 3.";
	else
		this.property2 = param2;
};

Parent.prototype.getProperty3 = function() {
	//Format value before returning it
	return "Property 3 is a " + typeof this.property3 + " and its value is: '" + this.property3 + "'.";
};

Parent.prototype.setProperty3 = function(param3) {
	//Check to make sure param3 was provided
	if(typeof param3 != "undefined")
		this.property3 = param3;
};

/**************
* INHERITANCE *
**************/

/*
Inheritance allows 'child' classes to inherit properties/methods
from their 'parent' classes. Normally all classes would be defined
in separate files, but for simplicity, both parent and child are defined here.
*/

/*
Child classes *should* accept arguments for their parent constructors,
however this is not required. In this example, the child will pass only
one parameter to its parent, leaving the parent to deal with only having
a single defined argument.
*/
function Child(parentParam1, childParam1) {
	/*
	Initialize parent properties using the .call() method.
	The first argument of the .call() method is always a reference
	to the child object. All other arguments will be given to the d
	parent's constructor.
	*/
	Parent.call(this, parentParam1);

	/*
	Even though a 'property1' was not defined in this class,
	it was defined in the parent, so this class has it as well.
	*/
	console.log(this.property1); //Was the variable set in the parent constructor?

	/* Initialize properties unique to the child */
	console.log("TYPEOF = " + typeof childParam1);
	this.childProperty = childParam1;
}

/*
Setting the child's prototype variable informs it what it's parent is.
If you forget to do this, the parent properties/methods will be unavailable.
In this case: .setProperty3() -- called in Parent constructor -- will be unavailable.
An error will be thrown!
*/
Child.prototype = new Parent();

/* Define a child-unique method. */
Child.prototype.childMethod = function(childMethodParam) {
	/*
	Note: Javascript functions do not respect defined parameters.
	You can access any/all arguments using the 'arguments' property.
	*/
	console.log("This function was passed " + arguments.length + " arguments: " + arguments);
};



