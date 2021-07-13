	// Example ID
	// var discord_id = "YOUR_ID";
	// Credits: Azariel#0004 & Roka#1337
	// also replace #spotify with Class ID
	// and remove Game if you dont need it Duh.
	// Documentation: https://github.com/phineas/lanyard

	// For this to Work please join on https://discord.gg/UrXF2cfJ7F

	var discord_id = "202740603790819328";

	function stats() {

	    $.getJSON("https://api.lanyard.rest/v1/users/" + discord_id, (data) => {
	        data = data.data;
	        data2 = data.activities[0]; // Selecting the 0 Option of Activities, can be checked in Chrome via data2. in Dev Console
	        data3 = data.activities; // Doing this just to Check something... wouldnt have worked otherwise via Plain JS
	        if (data.listening_to_spotify) {
	            $("#spotify").html(`<h1 class="nowplay">Listening to on Spotify</h1>
				<a class="data" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}"><b>${data.spotify.song}</b> 
				<b>by <i>${data.spotify.artist}</i></b></a>`);
	        } else {
	            $("#spotify").html("Not playing...")
	        }
	        if (data2 === undefined || data2.type == 2 || data3.length == 0 || data2.type == 4) {
                if(data3[1] == undefined) {
                    $("#game").html('<h1 class="nowplay2">Not playing...</h1>');
                    return;
                }
		else {
	            data2 = data3[1]
			}
	        }
	        $("#game").html(`<h1 class="nowplay2">Playing:</h1><p class="data" Playing at the Moment</h1><b>${data2.name}</b> 
				<b><i>${data2.details}</i>\n <i>${data2.state}</i></b>`);
	    })
	}
	stats();
	setInterval(stats, 10000);
