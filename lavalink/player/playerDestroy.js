module.exports.run = async(client, player) => {
const plcheck = client.modules.hasrequest(client, player);
if(plcheck === true) { await client.modules.resetplayer(client, player) }
else if(plcheck === false) { return; }
}