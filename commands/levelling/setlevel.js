module.exports = { 
    name: "setlevel",
    description: "Set the Level/XP of the User",
    category: "Levelling",
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
            description: "Whether to set XP or Level",
            required: true,
            choices: [
              {
                  name: "Set the XP",
                  value: "xp",
              },
              {
                  name: "Set the Level",
                  value: "level",
              },
           ],  
       },
       {
        name: "member",
        type: "USER",
        description: "User whose XP/Level is to be changed",
        required: true,
       },
       {
        name: "xp-level",
        type: "INTEGER",
        description: "The XP/Level to be set",
        required: true,
       },
    ],
run: async(client, interaction) => {
const option = interaction.options.getString('option');
const member = interaction.options.getUser('member');
const xplevel = interaction.options.getInteger('xp-level');
switch(option) {
    case "xp":
    const xembed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<@${member.id}> XP set to ${xplevel}.**`)        
    client.voiceManager.updateUser(member.id, interaction.guild.id, {
        newLevelingData: {
            xp: xplevel
        }
    });
    interaction.reply({ embeds: [xembed] })
    break;
    case "level":
    const lembed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<@${member.id}> Level set to ${xplevel}.**`)
    client.voiceManager.updateUser(member.id, interaction.guild.id, {
        newLevelingData: {
            level: xplevel
        }
    });
    interaction.reply({ embeds: [lembed] })
    break;
}}}