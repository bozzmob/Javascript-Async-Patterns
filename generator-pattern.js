function* gen()
{
	console.log("Hello");
	yield null;
	console.log("World");
}

var it = gen();
it.next(); // Hello
it.next(); // World

//Generator pauses the code and the iterator will resume the execution whenever it wants