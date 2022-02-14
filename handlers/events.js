const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Event Statistics");
table.setHeading("Event Name", "Load status");
const allevents = [];
module.exports = async(client) => {
  const loadevent = async(dir) => {
  let event = readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
      for (const file of event) {
      let pull = require(`../events/${dir}/${file}`);
      if (pull.event && typeof pull.event !== "string") {
      table.addRow(file, `❌ | Event Should be String!`);
      continue; }
      pull.event = pull.event || file.replace(".js", "")
      allevents.push(pull.event);
      client.on(pull.event, pull.run.bind(null, client));
      }}
    await ["client", "guild", "server"].forEach(x => loadevent(x));
    for (let i = 0; i < allevents.length; i++) {
      try {
        table.addRow(allevents[i], "✔");
      } catch(e) {
        table.addRow(allevents[i], "❌");
        console.log(e);
      }}
    console.log(table.toString())}