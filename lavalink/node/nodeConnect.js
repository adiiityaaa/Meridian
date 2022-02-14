module.exports.run = async(client, node) => {
console.log(`✔ | Lavalink Connected to ${node.options.host}!`)
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Connected to ${node.options.identifier}!**`)
await client.channels.cache.get(client.settings.playerlog).send({ embeds: [embed] })
}