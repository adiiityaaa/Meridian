module.exports.run = async(client, oS, nS) => {
    if(nS.member.bot) { return; }
    if(client.db.has(`tempvc_${nS.guild.id}`)) {
    const data = client.db.get(`tempvc_${nS.guild.id}`);
    if(!oS.channel && nS.channel && nS.channelId === data.channel) {
    const num = data.limit;
    const par = nS.channel.parent;
    const channel = await nS.guild.channels.create(`${nS.member.user.username}'s Room`, {
       type: "GUILD_VOICE",
       parent: par,
       userLimit: num,
       reason: "Join to Create System is Enabled."
    })
    nS.member.voice.setChannel(channel, "Join to Create System is Enabled.")
    client.tempdb.set(`channel_${nS.id}`, channel.id)
    } else if(oS.channel && nS.channel && oS.channelId === client.tempdb.get(`channel_${nS.id}`)) {
    const channel = nS.guild.channels.cache.get(client.tempdb.get(`channel_${nS.id}`));
    channel.delete("Join to Create system is Enabled.")    
    client.tempdb.delete(`channel_${nS.id}`)        
    } else if(oS.channel && !nS.channel && oS.channelId === client.tempdb.get(`channel_${nS.id}`)) {
    const channel = nS.guild.channels.cache.get(client.tempdb.get(`channel_${nS.id}`));
    channel.delete("Join to Create system is Enabled.")    
    client.tempdb.delete(`channel_${nS.id}`)    
    }}}