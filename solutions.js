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
		usrQualification = users[usrName[i]].qualification;

		if (usrQualification === qualification){
			arr.push(usrName[i]);
		}
	}
	if (arr.length === 0){
		return "Not Found";
	}
	return arr;
}

module.exports = { findQualification };

//module.exports = { findNationality }; 

//module.exports = { playingVdoGames };


