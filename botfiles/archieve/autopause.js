module.exports = {
name: "autopause",
description: "Toggle if song should be paused when voice channel is empty!",
category: "Configuration",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: ["MANAGE_GUILD"],    
options: [
        {
      name: "option",
      type: "STRING",
      description: "Choose whether enable or disable Autopause on Empty!",
      required: true,
      choices: [
          {
              name: "Enable",
              value: "enable",
          },
          {
              name: "Disable",
              value: "disable",
          },
        ],
    },
  ],    
run: async(client, interaction) => {
const option = interaction.options.getString("option");
const alreadye = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Autopause is already Enabled.**`)    
const alreadyd = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Autopause is already Disabled.**`)
const disable = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Autopause on empty has been Disabled.**`)
const enable = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Autopause on empty has been Enabled.**`)
const check = client.db.get(`autopause${interaction.guild.id}`);
switch(option) {
    case "enable":
    if(check === true) { return interaction.reply({ embeds: [alreadye] }) }
    client.db.set(`autopause_${interaction.guild.id}`, true)
    interaction.reply({ embeds: [enable] })
    break;
    case "disable":
    if(check === null || check === false) { return interaction.reply({ embeds: [alreadyd] }) }
    client.db.delete(`autopause_${interaction.guild.id}`)
    interaction.reply({ embeds: [disable] })  
    break;    
}}}    