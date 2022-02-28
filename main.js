const {Client,Intents, Collection} = require("discord.js");
const {token} = require("./config.json");
const fs = require("fs");

const client  = new Client({ intents:[Intents.FLAGS.GUILDS]});
client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
for(index in commandFiles){
	var command = require(`./commands/${commandFiles[index]}`);
	client.commands.set(command.data.name,command);
}

client.once('ready',()=>{
    console.log("Ready!");
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;
	client.commands.get(commandName).execute(interaction);

});

client.login(token);

