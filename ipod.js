// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];

function init() {
	// Your code goes here
	for (var i=0; i<6; i++) {
		volLevels[i] = document.getElementById("vl"+i);
	}
	volLevels[0].style.backgroundColor="#9f5cc4";
	volLevels[1].style.backgroundColor="#9f5cc4";
	volLevels[2].style.backgroundColor="#9f5cc4";
};

function volUp() {
	// Your code goes here
	for (var i = 0; i < 6; i++) {
		if (volLevels[i].style.backgroundColor == "") {
			volLevels[i].style.backgroundColor = "#9f5cc4";
			return;
		}
	}
}

function volDown() {
	// Your code goes here
	for (var i = 5; i >= 0; i--) {
		if (volLevels[i].style.backgroundColor != "") {
			volLevels[i].style.backgroundColor = "";
			return;
		}
	}
}

function switchPlay() {
	// Your code goes here
	if (document.getElementById("play").innerHTML == "pause") {
		document.getElementById("play").innerHTML = "play_arrow";
		clearInterval(duration);
	}
	else {
		document.getElementById("play").innerHTML = "pause";
		var time = document.getElementById("player-time");
		function increaseTime() {
			time.value = parseInt(time.value) + 1;
			document.getElementById("time-elapsed").innerHTML = secondsToMs(time.value);
			if (time.value == time.max) {
				nextSong();
		    }
		}
		duration = setInterval(increaseTime, 1000);
	}
}

function nextSong() {
	// Your code goes here
	var song = document.getElementById("player-song-name").innerHTML;
	for (var i = 0; i < 10; i++) {
		if (tracklist[i] == song) {
			if (i == 9) {
				document.getElementById("player-song-name").innerHTML = tracklist[0];
				document.getElementById("player-time").value = 0;
				document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
				return;
			}
			else {
				document.getElementById("player-song-name").innerHTML = tracklist[i + 1];
				document.getElementById("player-time").value = 0;
				document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
				return;
			}
		}
	}
}

function prevSong() {
	// Your code goes here
	var song = document.getElementById("player-song-name").innerHTML;
	for (var i = 0; i < 10; i++) {
		if (tracklist[i] == song) {
			if (i == 0) {
				document.getElementById("player-song-name").innerHTML = tracklist[9];
				document.getElementById("player-time").value = 0;
				document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
				return;
			}
			else {
				document.getElementById("player-song-name").innerHTML = tracklist[i - 1];
				document.getElementById("player-time").value = 0;
				document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
				return;
			}
		}
	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();