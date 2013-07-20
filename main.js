$(document).ready(function() {
	/*
	Because a third argument is not given,
	Parent's setProperty3 method will stop
	its default value being overwritten
	*/
	var parent = new Parent("a", 2);
	console.log(parent);

	var child = new Child(3, "b");
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
});