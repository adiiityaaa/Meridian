module.exports = {
 name: "refresh",
 run: async (client, message, args) => {
     try {
     const { readdirSync } = require("fs");
     const ascii = require("ascii-table");
     let table = new ascii("Commands");
     let table2 = new ascii("Slash Commands");
     client.buttons.sweep(() => true);
     table.setHeading("Buttons", "Load status");
     
     readdirSync("./buttons/").forEach(dir => {
         
         const commands = readdirSync(`./buttons/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            delete require.cache[require.resolve(`../../buttons/${dir}/${file}`)];
            let pull = require(`../../buttons/${dir}/${file}`);
            let cat = pull.category || "Uncategorised";
            if (pull.name) {
                client.buttons.set(pull.name, pull);
                table.addRow(pull.name, '✔');
            } else {
                table.addRow(file, `❌`);
                continue;
            }
            }
    });
    console.log(table.toString());
         client.commands.sweep(() => true)
         table2.setHeading("Command", "Load Status");
         readdirSync("./commands/").forEach(dir => {
         
         const slashcommands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of slashcommands) {
            delete require.cache[require.resolve(`../../commands/${dir}/${file}`)];
            let pull = require(`../../commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table2.addRow(pull.name, '✔');
            } else {
                table2.addRow(file, `❌`);
                continue;
            }
    
            // If there's an aliases key, read the aliases.
        }
    });
    console.log(table2.toString());
    console.log("✔ | Commands and Buttons Refreshed.")
     const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Commands and Buttons Refreshed.**`)
     message.channel.send({ embeds: [embed] });
     } catch (error) {
         console.log(error)
     }
  }
}