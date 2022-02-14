module.exports.run = async(client, message) => {
const check = client.modules.hasrequestchx(client, message)
if(check === false) { return; }
const msg = client.db.get(`isystemqembed_${message.guild.id}`);
if(message.id === msg) { 
await client.db.delete(`isystemcheck_${message.guild.id}`)
await client.db.delete(`isystemchx_${message.guild.id}`)
await client.db.delete(`isystemqembed_${message.guild.id}`)
await client.db.delete(`isystempembed_${message.guild.id}`)          
}}