console.log("First line in JS file", Date.now());

//create new request object
let myRequest = new XMLHttpRequest();
console.log("myRequest", myRequest);

function executeThisIfXHRFails() {
	console.log("An error occured while transferring the data");
}

function executeThisAfterFileIsLoaded() {
	console.log("event.target", event.target);
	var data = JSON.parse(event.target.responseText);
	console.log("data", data );
	outputSongs(data.songs);
}


//set up event listeners
myRequest.addEventListener("load", executeThisAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);

//tell it which http verb to use: GET-most used: request to get,
// POST- save data, PUT: wipeout/update/replace info, DELETE- find info and remove, 
//PATCH- fine tuned update
myRequest.open("GET", "songs.json");
//go it it, boy!
myRequest.send();

//DOM Manipulation
function outputSongs(songsArr) {
	let songList = document.getElementById("song-list");
	songsArr.forEach(function(song){
		console.log("song title", song.title);
		songList.innerHTML += `<h2>${song.title}</h2>` 
	});
}



console.log("Last line in JS file", Date.now());




