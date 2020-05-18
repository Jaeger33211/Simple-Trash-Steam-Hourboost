//Get required Packages
const SteamUser = require('steam-user');

//Get config
const config = require("./config.json");

//Define new Constructor
let client = new SteamUser();


//Getting the Username and Password in 1 Var. This is unneeded but makes the Code more readable.
var login = {
	accountName: config.username,
	password: config.password
};

//Connect to steam network with the Variables from "login"
client.logOn(login);

//Once we have a successful Connection:
client.on('loggedOn',() => {
			console.log("Successfully logged in with SteamID: "+ client.steamID.getSteam3RenderedID());
			
			//set Personastate to Online
			client.setPersona(SteamUser.EPersonaState.Online)
			//parse games
			games = JSON.parse(config.gameids);
			//push games from config to gamesPlayed event.
			client.gamesPlayed(games); 
			console.log("We are currently hourboosting the Appids: "+ games);

});



//Error logging stuff. Not really nesessary but might be Usefull in the Futu
client.on('error', (err) => {
	console.log("Steam-Error: "+err);
});

