var getStdin = require('get-stdin');

getStdin().then(str => {
	if(str.split('fizz').length !== 35 || str.split('buzz').length !== 22){ 
		console.error('Not enough fizz or buzz');	
		process.exit(13);
	}else{
		console.log('fizz test successful');
	}
});
