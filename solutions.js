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

module.exports = { playingVdoGames };


