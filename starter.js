const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const { Manager } = require("erela.js");
const Deezer = require("erela.js-deezer");
const Facebook = require("erela.js-facebook");
const filter  = require("erela.js-filters");
const Spotify = require("better-erela.js-spotify").default;
const { default: AppleMusic } = require("better-erela.js-apple");
const config = require("./botfiles/config/settings.json");
const { DiscordTogether } = require('discord-together');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: config.openAI,
});
const { AutoPoster } = require("topgg-autoposter");
const poster = AutoPoster(config.topgg, client)
const Topgg = require(`@top-gg/sdk`)
const Statcord = require("statcord.js");
const { GiveawaysManager } = require('discord-giveaways');

client.manager = new Manager({
            nodes: [
              { host: "node3.ultimatesrv.com", port: 21249, retryDelay: 5000, password: "JarvisOwnsThisNode", identifier: "Node Germany" },
              { host: "fi01.optik.host", port: 28330, retryDelay: 5000, password: "JarvisOwnsThisNode", identifier: "Node Finland" },
            ],
            plugins: [
              new Facebook(),
              new AppleMusic(),
          ],
            autoPlay: true,
            send(id, payload) {
                const guild = client.guilds.cache.get(id);
                if (guild) guild.shard.send(payload);
            }});
client.giveaways = new GiveawaysManager(client, {
              storage: './botfiles/storage/giveaways.json',
              default: {
                  botsCanWin: false,
                  embedColor: '#00FF00',
                  embedColorEnd: '#00FFFF',
                  reaction: '🎉'
              }
          });            
client.emotes = require("./botfiles/config/emotes.json");
client.settings = require("./botfiles/config/settings.json");
client.colors = require("./botfiles/config/colors.json");
client.filters = require("./botfiles/config/filters.js");
client.modules = require("./botfiles/functions/modules.js");
client.btns = require("./botfiles/functions/buttons.js");
client.embeds = require("./botfiles/functions/embeds.js");
client.db = require("quick.db");
client.voicedb = require("quick.db");
client.tempdb = require("quick.db");
client.reminderdb = require("quick.db");
client.discord = require("discord.js");
client.openai = new OpenAIApi(configuration);
client.topgg = new Topgg.Api(config.topgg);
client.activities = new DiscordTogether(client);
client.statcord = new Statcord.Client({ 
  client, 
  key: "statcord.com-WQSHbcHNYS1Iay7rsqja"
})
client.commands = new Discord.Collection();
client.developers = new Discord.Collection();
client.buttons = new Discord.Collection();
["buttons", "commands", "developers", "events", "lavalink"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

poster.on('posted', (stats) => { 
  console.log(`✔ | Posted stats to Top.gg | ${stats.serverCount} servers`)
})

client.statcord.on("autopost-start", () => {
  console.log("✔ | Statcord Autoposting Started.");
});

client.statcord.on("post", status => {
  if (!status) { return; }
  else { console.error(`❌ | Statcord Autopost Error:\n${status}`); }
});

process.on('unhandledRejection', (reason, p) => {
        console.log('❌ | Unhandled Rejection has Occured!');
        console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log('❌ | Uncaught Exception has Occured!');
    console.log(err, origin);
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('❌ | Uncaught Exception Monitor has Occured!');
    console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
    console.log('❌ | Multiple Resolves have Occured!');
    console.log(type, promise, reason);
});

client.login(config.token)