const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports = {
    data : new SlashCommandBuilder()
        .setName("play")
        .setDescription("Plays specified music"),
    async execute(interaction){
        await interaction.reply("Playing some music");
    }
}