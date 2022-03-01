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
        type: "MEMBER",
        description: "Member to Add/Remove a Ban.",
        required: true,
       },
    ],
    run: async(client, interaction) => {
    await interaction.deferReply().catch(() => {}); 
    const option = interaction.options.getString("option");
    const member = interaction.option.getUser('member');
    interaction.editReply("Coming Soon!")    
}}