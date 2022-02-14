module.exports.run = async(client, player) => {
const aucheck = client.db.get(`autoplay_${player.guild}`);    
if(aucheck === true) { await client.modules.autoplay(client, player) }
else if(aucheck === false || aucheck === null) {        
const ischeck = client.modules.hasrequest(client, player);  
if(ischeck === true) { client.modules.resetplayer(client, player) }}}