module.exports.request = request;
module.exports.link = link;

function link(client, url, text) {
  const button = new client.discord.MessageButton()
  .setStyle("LINK")
  .setURL(`${url}`)
  .setLabel(`${text}`)
  const row = new client.discord.MessageActionRow()
  .addComponents(button);
  return [row];
}

function request(client) {
  const button1 = new client.discord.MessageButton()
  .setStyle('PRIMARY')
  .setEmoji('923928133613260871')
  .setCustomId('previous_song')  
const button2 = new client.discord.MessageButton()
   .setStyle('DANGER')
  .setEmoji('923928132724064297')
  .setCustomId('pause_song')  
const button3 = new client.discord.MessageButton()
  .setStyle('SUCCESS')
  .setEmoji('923928137065197579')
  .setCustomId('resume_song')  
const button4 = new client.discord.MessageButton()
  .setStyle('DANGER')
  .setEmoji('923928139887939615')
  .setCustomId('stop_song')  
const button5 = new client.discord.MessageButton()
  .setStyle('PRIMARY')
  .setEmoji('923928134984814624')
  .setCustomId('skip_song')
const button6 = new client.discord.MessageButton()
  .setStyle('PRIMARY')
  .setEmoji('923928141024612372')
  .setCustomId('voldown_song')  
const button7 = new client.discord.MessageButton()
   .setStyle('DANGER')
  .setEmoji('923928424089788436')
  .setCustomId('autoplay_song')  
const button8 = new client.discord.MessageButton()
  .setStyle('SUCCESS')
  .setEmoji('923929005818781727')
  .setCustomId('addrelated_song')  
const button9 = new client.discord.MessageButton()
  .setStyle('DANGER')
  .setEmoji('923928132342411264')
  .setCustomId('loop_song')  
const button10 = new client.discord.MessageButton()
  .setStyle('PRIMARY')
  .setEmoji('923928141808939018')
  .setCustomId('volup_song')
const button11 = new client.discord.MessageButton()
  .setStyle('PRIMARY')
  .setEmoji('923928138948419584')
  .setCustomId('unseek_song')  
const button12 = new client.discord.MessageButton()
   .setStyle('DANGER')
  .setEmoji('923928139317542913')
  .setCustomId('shuffle_song')  
const button13 = new client.discord.MessageButton()
  .setStyle('SUCCESS')
  .setEmoji('923928136360554519')
  .setCustomId('save_song')  
const button14 = new client.discord.MessageButton()
  .setStyle('DANGER')
  .setEmoji('967422317883949137')
  .setCustomId('clear_song')  
const button15 = new client.discord.MessageButton()
  .setStyle('PRIMARY')
  .setEmoji('923928138176663592')
  .setCustomId('seek_song')
let row1 = new client.discord.MessageActionRow()
  .addComponents(button1, button2, button3, button4, button5);
let row2 = new client.discord.MessageActionRow()
  .addComponents(button6, button7, button8, button9, button10);
let row3 = new client.discord.MessageActionRow()
  .addComponents(button11, button12, button13, button14, button15);
  return [row1, row2, row3]
}