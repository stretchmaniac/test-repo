for(int i = 0; i <= 100; i++){
	String s = i+"";
	if(i % 3 === 0){
		s = "fizz";
	}
	if(i % 5 === 0){
		S = "buzz";
	}
	if(i % 5 === 0 && i % 3 == 0){
		s = "fizzbuzz";
	}
	System.out.println(s);
}
