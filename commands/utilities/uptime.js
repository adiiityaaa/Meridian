module.exports = {
name: "uptime",
description: "Displays the Uptime of the Client!",
category: "Utilities",
type: 1,    
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: [""],
run: async(client, interaction) => {
        let Days = Math.floor(client.uptime / 86400000);
        let Hours = Math.floor(client.uptime / 3600000) % 24;
        let Minutes = Math.floor(client.uptime / 60000) % 60;
        let Seconds = Math.floor(client.uptime / 1000) % 60;    
        const RemoveUseless = (Duration) => {
        return Duration.replace("0 Day\n", "").replace("0 Hour\n", "").replace("0 Minute\n", "")};
        let Uptime = await RemoveUseless(`${Days} ${Days > 1 ? "Days" : "Day"}, ${Hours} ${Hours > 1 ? "Hours" : "Hour"}, ${Minutes} ${Minutes > 1 ? "Minutes" : "Minute"} and ${Seconds} ${Seconds > 1 ? "Seconds" : "Second"}`);
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.uptime} | **Client Uptime!**\n\n${client.emotes.garrow} ${Uptime}`)    
await interaction.reply({ embeds: [embed] })
}}