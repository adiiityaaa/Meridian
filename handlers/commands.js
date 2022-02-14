const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Command Statistics");
table.setHeading("Command Name", "Load Status");
module.exports = async(client) => {
    let slash = [];   
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
             if (pull.name) {
                client.commands.set(pull.name, pull);
                slash.push(pull)
                table.addRow(file, '✔');
            } else {
                table.addRow(file, '❌');
            }}});
console.log(table.toString())
client.on("ready", async() => {
        await client.application.commands.set(slash)
        console.log("Slash Commands Deployed!")
      })
}