var getStdin = require('get-stdin');

getStdin().then(str => {
	if(str.split('fizz').length !== 35 || str.split('buzz').length !== 22){ 
		throw 'Not enough fizz or buzz';	
	}else{
		console.log('fizz test successful');
	}
});
