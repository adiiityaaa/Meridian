const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Button Statistics");
table.setHeading("Button Name", "Load Status");
module.exports = async(client) => {
    readdirSync("./buttons/").forEach(dir => {
        const buttons = readdirSync(`./buttons/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of buttons) {
            let pull = require(`../buttons/${dir}/${file}`);
             if (pull.name) {
                client.buttons.set(pull.name, pull);
                table.addRow(file, '✔');
            } else {
                table.addRow(file, '❌');
            }}});
console.log(table.toString())}