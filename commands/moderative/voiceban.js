module.exports = { 
    name: "voiceban",
    description: "Ban a user from joining Voice Channel.",
    category: "Moderative",
    type: 1,    
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MOVE_MEMBERS"],
    authorPerms: ["MANAGE_GUILD"],
    options: [
        {
            name: "option",
            type: "STRING",
            description: "Add or Remove a Voice Ban from User",
            required: true,
            choices: [
              {
                  name: "Add a Voice Ban",
                  value: "add",
              },
              {
                  name: "Remove a Voice Ban",
                  value: "remove",
              },
              {
                name: "View the List",
                value: "list", 
             },
             {
                name: "Reset the List",
                value: "reset", 
             },
           ],  
       },
       {
        name: "member",
        type: "USER",
        description: "Member to Add/Remove a Ban.",
        required: false,
       },
    ],
    run: async(client, interaction) => {
    await interaction.deferReply().catch(() => {});    
    const nomember = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a member.**`)
    const option = interaction.options.getString("option");
    const member = interaction.option.getMember('member'); 
    if(!member) { return interaction.editReply({ embeds: [nomember] }) }
    const alreadya = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is already Voice-Banned.**`)
    const alreadyn = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is not Voice-Banned.**`)
    const added = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<@${member.id}> is now Voice-Banned.**`)
    const removed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<@${member.id}> is now Voice-Unbanned.**`)
    const reset = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Voice-Ban list has been resetted.**`)
    switch(option) {
        case "add":
        if(client.voicedb.has(`voiceban_${interaction.guild.id}_${member.id}`)) { return interaction.editReply({ embeds: [alreadya] }) }
        client.db.set(`voiceban_${interaction.guild.id}_${member.id}`)
        interaction.editReply({ embeds: [added] })
        break; 
        case "remove":
        if(!client.voicedb.has(`voiceban_${interaction.guild.id}_${member.id}`)) { return interaction.editReply({ embeds: [alreadyn] }) }
        client.db.delete(`voiceban_${interaction.guild.id}_${member.id}`)
        interaction.editReply({ embeds: [removed] })
        break;
        case "list":
        interaction.editReply("Coming Soon!")  
        break;
        case "reset":
        client.voicedb.all().filter(d => d.ID.startsWith(`voiceban_${interaction.guild.id}`)).forEach(d => db.delete(d.ID))
        interaction.editReply({ embeds: [reset] })
        break;
}}}