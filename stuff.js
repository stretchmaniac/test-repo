for(var i = 0; i <= 100; i++){
	var s = i+"";
	if(i % 3 === 0){
		s = "fizz";
	}
	if(i % 5 === 0){
		s = "buzz";
	}
	if(i % 5 === 0 && i % 3 === 0){
		s = "fizzbuzz";
	}
	console.log(s);
}
console.log("finished!");

console.log("now for the primes...");
for(var i = 2; i <= 100; i++){
	var prime = true;
	for(var k = 2; k <= Math.sqrt(i); k++){
		if(i % k === 0){
			prime = false;
		}
	}
	if(prime){
		console.log(i);
	}
}

console.log('and some triangular numbers!');
for(var i = 0; i <= 100; i++){
	console.log(i*(i+1)/2);
}

console.log('Finished!');
