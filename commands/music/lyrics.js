const Genius = require("genius-lyrics");
const Client = new Genius.Client("P5EuV35o2ISNe_W4VesCztLiUf2JDnjIQAlUKc3VAVg5HI1KwSp80O4QWGku6DOt");

module.exports = {
  name: "lyrics",
  description: "Displays Lyrics for the song!",
  category: "Music",
  type: 1,
  developerOnly: false,
  voiceChannel: false,
  mutualChannel: false,
  djOnly: false,     
  clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
  options: [
    {
      name: "song",
      type: "STRING",
      description: "Name of the Song.",
      required: false,
    },
  ],
run: async(client, interaction) => {
const nosong = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Song Name!**`)
const nolyrics = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Lyrics Found!**`) 
let song = interaction.options.getString('song');
if(!song) { const player = client.manager.players.get(interaction.guild.id);
if(!player) { return interaction.reply({ embeds: [nosong] }) }
else { song = player.queue.current.title; }}
const searches = await Client.songs.search(song);
const firstSong = searches[0];
let lyrics = await firstSong.lyrics()
if(!lyrics) { return interaction.reply({ embeds: [nolyrics] }) }
if(lyrics.length > 4096) { lyrics = `${lyrics.slice(0, 4092)}...` }    
const embed = new client.discord.MessageEmbed()
.setThumbnail(firstSong.image)
.setColor(client.colors.gold)
.setURL(firstSong.url)
.setTitle(`${firstSong.title}`)
.setFooter({ text: `by ${firstSong.artist.name}`, icon: firstSong.artist.image })
.setDescription(`${lyrics}`)
interaction.reply({ embeds: [embed] })
}}