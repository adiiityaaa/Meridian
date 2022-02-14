const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Command Statistics");
table.setHeading("Command Name", "Load Status");
module.exports = async(client) => {
    readdirSync("./developers/").forEach(dir => {
        const commands = readdirSync(`./developers/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../developers/${dir}/${file}`);
             if (pull.name) {
                client.developers.set(pull.name, pull);
                table.addRow(file, '✔');
            } else {
                table.addRow(file, '❌');
            }}});
console.log(table.toString())}