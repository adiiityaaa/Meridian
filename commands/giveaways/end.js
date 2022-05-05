module.exports = {
    name: "end",
    description: "End a Giveaway!",
    category: "Giveaways",
    type: 1,
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
    authorPerms: ["MANAGE_MESSAGES"],    
    options: [
          {
          name: "giveawayid",
          type: "INTEGER",
          description: "ID of the Giveaway",
          required: true,
        },
    ],
run: async(client, interaction) => {
const noperms = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **You do not have Manage Messages Permission or Giveaways Role.**`)    
if(!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")){ return interaction.reply({ embeds: [noperms] }) }
const notend = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Giveaway already ended.**`)
const nofound = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Giveaway Found.**`)
const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Giveaway Ended.**`)
const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An Error Occured.**`)
const query = interaction.options.getString("giveawayid")
const giveaway = client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);
if (!giveaway) { return interaction.reply({ embeds: [nofound] }) }
if (giveaway.ended) { return interaction.reply({ embeds: [notend] }) }
client.giveawaysManager.end(giveaway.messageId).then(() => { interaction.reply({ embeds: [success] }) }).catch((e) => { interaction.reply({ embeds: [error] }) })
}}