const os = require('os');
const cpuStat = require("cpu-stat");

module.exports.embed = embed;
module.exports.isrequest = isrequest;
module.exports.hasrequest = hasrequest;
module.exports.hasrequestchx = hasrequestchx;
module.exports.duration = duration;
module.exports.editpembed = editpembed;
module.exports.editqembed = editqembed;
module.exports.autoplay = autoplay;
module.exports.isrequestchannel = isrequestchannel;
module.exports.hasdj = hasdj;
module.exports.isadj = isadj;
module.exports.resetplayer = resetplayer;
module.exports.progressbar = progressbar;
module.exports.updatestats = updatestats;
module.exports.rejoinplayer = rejoinplayer;

async function updatestats(client) {
let cpuLol;
cpuStat.usagePercent(function(err, percent, seconds) {
if (err) { return console.log(err); }    
const data1 = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);
const embed = new client.discord.MessageEmbed()
.setColor(client.colors.cyan)
.setDescription(`${client.emotes.channel} | **Statistical Information:**\n> Total Servers: ${client.guilds.cache.size}\n> Total Channels: ${client.channels.cache.size}\n> Total Commands: ${client.commands.size}\n> Total Users: ${client.users.cache.size}\n${client.emotes.config} | **System Information:**\n> CPU Model: ${os.cpus().map(i => `${i.model}`)[0]}\n> CPU Usage: ${percent.toFixed(2)}%\n> Ram Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\n> Architecture: ${os.arch()}\n> Platform: ${os.platform()}\n${client.emotes.package} | **Lavalink Information:**\n> Total Nodes: ${client.manager.nodes.size}\n> Total Players: ${client.manager.players.size}\n> Total Shards: ${client.manager.options.shards}\n${client.emotes.plus} | **Additional Information:**\n> Prefix: \`/\`\n> API Latency: ${client.ws.ping}ms\n> Last Reboot: <t:${data1}:R>\n> Updates: Every 15 Minutes!`)
.setFooter({ text: "Last Updated" })
.setTimestamp()
client.guilds.cache.get("941672154209071164").channels.cache.get("941746209142505503").messages.fetch("941750118032486481").then(x => { x.edit({ embeds: [embed] })})
})}

async function rejoinplayer(client) {
client.guilds.cache.forEach(guild => { 
if(client.db.has(`247_${guild.id}`) === true) {
 const data = client.db.get(`playerdata_${guild.id}`)
 const player = client.manager.create({
   guild: guild.id,
   voiceChannel: data.vc,
   textChannel: data.tc,
   selfDeafen: true,
 })
 if(player.state !== "CONNECTED") { player.connect() }
 const check = client.modules.hasrequest(client, player)    
 if(check === true) { client.modules.resetplayer(client, player) }
}})}

async function hasrequestchx(client, message) {
 const check = client.db.get(`isystemcheck_${message.guild.id}`);
 if(!check || check === false) { return false; }
 else { return true; }
}

function embed(client, color, description) {
  const embed = new client.discord.MessageEmbed()
  .setColor(color)
  .setDescription(description)
  return embed;
}

async function isrequest(client, channel, guild) {
 const check = client.db.get(`isystemcheck_${guild}`);
 if(!check) { return false; }
 const check2 = client.db.get(`isystemchx_${guild}`);
 const check3 = client.channels.cache.get(check2);
 if(!check3) { return false; }
 if(channel === check3.id) { return true; }
 else { return false; }
}

async function progressbar(client, current, total) {
const size = 16;
const line = "▬";
const position = ":radio_button:";    
	if (current > total) {
		const rawbar = `[${line.repeat(size)}](https://google.com/)`;
        const bar = rawbar + position;
		const percentage = (current / total) * 100;
		return [`${bar}\nDuration: [${current}/${total}] | Completed: ${percentage}%`];
	} else {
        const currr = parseInt(current);
        const tottt = parseInt(total);
		const percent = currr / tottt;
		const completed = Math.round((size * percent));
		const empty = size - completed;
		const rawbar1 = `[${line.repeat(completed)}](https://google.com/)`;
		const rawbar2 = line.repeat(empty);
		const bar = rawbar1 + position + rawbar2;
		const rawpercentage = percent * 100;
        const dur1 = client.modules.duration(client, current);
        const dur2 = client.modules.duration(client, total);
		return `${client.emotes.parrow} Duration: ${dur1}/${dur2}\n${bar}`
	}
}

function hasrequest(client, player) {
 const check = client.db.get(`isystemcheck_${player.guild}`);
 if(!check || check === false) { return false; }
 else { return true; }
}

function duration(client, ms) {
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let seconds = Math.floor((ms / 1000 ) % 60);
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    const time = `${hours === '00' ? '' : `${hours}:`}${minutes === '00' ? 'Seconds: ' : `${minutes}:`}${seconds}`;
    return time;
}

async function editpembed(client, player) {
   const dur = client.modules.duration(client, player.queue.current.duration)
   let aucheck = client.db.get(`autoplay_${player.guild}`);
   let loop;
   if(!player.queueRepeat && !player.trackRepeat) { loop = "" }
   else if(player.queueRepeat && !player.trackRepeat) { loop = "| Loop: Queue" }
   else if(!player.queueRepeat && player.trackRepeat) { loop = "| Loop: Song" }
   const embed = new client.discord.MessageEmbed()
   .setColor(client.colors.gold)
   .setImage(`https://img.youtube.com/vi/${player.queue.current.identifier}/maxresdefault.jpg`)
   .setDescription(`${client.emotes.music} | **Now Playing:**\n\n${client.emotes.parrow} [${player.queue.current.title}](${player.queue.current.uri}) by ${player.queue.current.author}\n${client.emotes.parrow} Requester: ${player.queue.current.requester} | Duration: ${dur}\n${client.emotes.parrow} [Invite](https://discord.com/api/oauth2/authorize?client_id=933686221727731794&permissions=274881342737&scope=bot%20applications.commands) | [Documentation](https://meridian.gitbook.io/meridian-documentation/) | [Support](https://discord.gg/j9ngY7tPzU)`)
   if(player.playing && aucheck === false || aucheck === null) { embed.setFooter({ text: `Volume: ${player.volume}% ${loop}` }) }
   else if(!player.playing && aucheck === false || aucheck === null) { embed.setFooter({ text: `Paused` }) } 
   else if(aucheck === true && !player.playing) { embed.setFooter({ text: `Paused` }) }
   else if(aucheck === true && player.playing) { embed.setFooter({ text: `Volume: ${player.volume}% | Autoplay ${loop}` }) }
   const rawchx = client.db.get(`isystemchx_${player.guild}`)
   const m = client.db.get(`isystempembed_${player.guild}`)
   const btn = client.btns.request(client)
   await client.channels.cache.get(rawchx).messages.fetch(m).then(msg => { msg.edit({ embeds: [embed], components: btn }).catch(e => console.log(e)); })
}

async function editqembed(client, player) {
		const queue = player.queue;
		const a = 0;
		const b = queue.length > 15 ? 15 : queue.length
		const songs = player.queue.slice(a, b)
		const final = songs.map((song, i) => `#${i +1} ${client.emotes.parrow} [${song.title}](${song.uri}) : ${client.modules.duration(client, song.duration)}`).reverse().join("\n"); 
		const desc1 = `${client.emotes.music} Displaying ${songs.length} out of ${queue.size + 1} Songs | Duration: ${client.modules.duration(client, queue.duration)}\n\n${final}`;
		const desc2 = `${client.emotes.music} Last song in the Queue! | Duration: ${client.modules.duration(client, queue.duration)}`;
		const desc = songs.length === 0 ? desc2 : desc1;
		const qembed = new client.discord.MessageEmbed()
		.setColor(client.colors.gold)
		.setDescription(`${desc}`)
        const rawchx = client.db.get(`isystemchx_${player.guild}`)
        const m = client.db.get(`isystemqembed_${player.guild}`)
        await client.channels.cache.get(rawchx).messages.fetch(m).then(msg => { msg.edit({ embeds: [qembed] }).catch(e => console.log(e)); })
}

async function autoplay(client, player) {
 const data = client.db.get(`autoplaydata_${player.guild}`);
 if(data === null) { return; }
 const iden = data.identity;
 const query = `https://www.youtube.com/watch?v=${iden}&list=RD${iden}`;
 const response = await client.manager.search(query, client.user);
 if(!response || response.loadType === 'LOAD_FAILED' || response.loadType !== 'PLAYLIST_LOADED') {
 const fail = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No result found for Autoplay!**`)
 client.channels.cache.get(player.textChannel).send({ embeds: [fail] })
 client.db.delete(`autoplaydata_${player.guild}`) }
 else {
 player.queue.add(response.tracks[Math.floor(Math.random() * Math.floor(response.tracks.length))])
 if (!player.playing && !player.paused && !player.queue.length) player.play()
}}

async function isrequestchannel(client, player) {
  const check = await client.db.get(`isystemcheck_${player.guild}`);
  if(check === null) { return false; }
  if(check === true) {
  const chx = client.channels.cache.get(await client.db.get(`isystemchx_${player.guild}`))
  if(!chx) { return false; }
  if(player.textChannel === chx.id) { return true; }
  else { return false; }
}}

async function resetplayer(client, player) {
const guild = client.guilds.cache.get(player.guild)    
const embed2 = new client.discord.MessageEmbed()
.setDescription(`${client.emotes.music} | **No Song in the Queue!**\n\n${client.emotes.parrow} Join a Voice Channel.\n${client.emotes.parrow} Send Song name or URL here.\n${client.emotes.parrow} Song will be played in your Channel.\n${client.emotes.parrow} Supported Sources: YouTube, Spotify, Apple Music and much more!`)
.setColor(client.colors.gold)
.setThumbnail(guild.iconURL())
.setImage(`https://media.discordapp.net/attachments/761484386708357150/941756581287166052/Request_Channel_Sample.gif?width=349&height=477`)
const embed1 = new client.discord.MessageEmbed()
.setDescription(`${client.emotes.music} | **No Song Playing Currently!**\n\n${client.emotes.parrow} [Invite](https://discord.com/api/oauth2/authorize?client_id=933686221727731794&permissions=274881342737&scope=bot%20applications.commands) | [Documentation](https://meridian.gitbook.io/meridian-documentation/) | [Support](https://discord.gg/j9ngY7tPzU)`)
.setColor(client.colors.gold)
.setFooter({ text: `Last played` })
.setTimestamp()
.setImage(`https://cdn.discordapp.com/attachments/761484386708357150/941772797036859473/Meridian_Image.jpg?width=1144&height=643`)
        const rawchx = client.db.get(`isystemchx_${player.guild}`)
        const m1 = client.db.get(`isystemqembed_${player.guild}`)
        const m2 = client.db.get(`isystempembed_${player.guild}`)
        await client.channels.cache.get(rawchx).messages.fetch(m1).then(msg => { msg.edit({ embeds: [embed2] }).catch(e => console.log(e)); })
        await client.channels.cache.get(rawchx).messages.fetch(m2).then(msg => { msg.edit({ embeds: [embed1] }).catch(e => console.log(e)); })    
}

function hasdj(client, guild) {
let variable;    
const roles = client.db.get(`djroles_${guild}`);
if(!roles) { return false; }
const server = client.guilds.cache.get(guild);
roles.forEach(x => {
if(!server.roles.cache.has(x)) { 
client.db.delete(`djroles_${guild}`)
variable = false; }
else { variable = true }})
if(variable) { return true; }
else if(!variable) { return false; }    
}

function isadj(client, member) {
let isdj = false;
const roleid = client.db.get(`djroles_${member.guild.id}`);
for (const djRole of roleid) {
if(!member.guild.roles.cache.get(djRole)) {
      client.db.delete(`djroles_${member.guild.id}`);
      continue;
    }
    if(member.roles.cache.has(djRole)) isdj = true;
}
if(!isdj && !member.permissions.has("ADMINISTRATOR")) { return false; } 
else if(isdj || member.permissions.has("ADMINISTRATOR")) { return true; } 
}