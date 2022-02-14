module.exports.run = async(client, node) => {
console.log(`🔃 | Lavalink Reconnecting to ${node.options.host}...`)
const embed = client.modules.embed(client, client.colors.yellow, `${client.emotes.loading} | **Reconnecting to ${node.options.identifier}...**`)
await client.channels.cache.get(client.settings.playerlog).send({ embeds: [embed] })
}