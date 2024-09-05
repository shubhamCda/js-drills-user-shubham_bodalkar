function playingVdoGames(users) {
	const usrName = Object.keys(users);

	let usrArr = [];

	for (let i = 0; i < usrName.length; i++) {
		const intUser = users[usrName[i]].interests;
		// console.log(intUser);


		const intStr = /Playing Video Games/ig;

	
		if (intStr.test(intUser)) {
			usrArr.push(usrName[i]);

		}		
	}
	if (usrArr.length === 0) {
		return "Not Found";
	}
	return usrArr;
}

function findNationality(users, nationality){
	const usrName = Object.keys(users);
	let arr = [];

	for (let i = 0; i < usrName.length; i++){
		const usrNationality = users[usrName[i]].nationality;
		//console.log(usrNationality);
		

		if (usrNationality === nationality){
			arr.push(usrName[i]);
		}
	}
	if (arr.length === 0){
		return "Not Found";
	}

	return arr;
}



function findQualification(users, qualification){
	const usrName = Object.keys(users);

	let arr = [];

	for (let i = 0; i < usrName.length; i++){
		const usrQualification = users[usrName[i]].qualification;

		if (usrQualification === qualification){
			arr.push(usrName[i]);
		}
	}
	if (arr.length === 0){
		return "Not Found";
	}
	return arr;
}


function findDesignation(users){
	let usrDesignation = {
		"Senior Golang Developer": [],
		"Intern - Golang": [],
		"Intern - Javascript": [],
		"Senior Javascript Developer": [],
		"Python Developer": []
	}

	let desigObj = Object.keys(usrDesignation);

	const usrName = Object.keys(users);

	for (let i = 0; i < usrName.length; i++){
		const usrDesig = users[usrName[i]].desgination;
		//console.log(usrDesig);
		
		for (let j = 0; j < desigObj.length; j++){
			
			if (desigObj[j] === usrDesig){
				usrDesignation[usrDesig].push(usrName[i])
			}
			
		}
	}
	return usrDesignation;
}

module.exports = { findDesignation };

//module.exports = { findQualification };

//module.exports = { findNationality }; 

//module.exports = { playingVdoGames };


