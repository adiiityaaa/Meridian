module.exports.run = async(client, node, error) => {
console.log(`❌ | Lavalink Node Error from ${node.options.host}\n${error}`)
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Error from ${node.options.identifier}!**\n${client.emotes.rarrow} ${error}`)
await client.channels.cache.get(client.settings.playerlog).send({ embeds: [embed] })
}