// const { RichEmbed } = require("discord.js");
// const fs = require("fs");
// const ms = require("ms");
// let warns = JSON.parse(fs.readFileSync("../../configs/warnings.json", "utf8"));
// // let warns = JSON.parse(fs.readFileSync("..../warnings.json", "utf8"));

// module.exports = {
//     name: "warn",
//     category: "moderation",
//     description: "warns the member",
//     usage: "<id | mention>",
//     run: async (client, message, args) => {
//         if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You cannot warn that person, Missing permission");
//         let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//         if(!wUser) return message.channel.send("Unable to find that person.");
//         if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Unable to warn this person.");
//         let reason = args.join(" ").slice(22);

//         if(!warns[wUser.id]) warns[wUser.id] = {
//             warns: 0
//         };

//         warns[wUser.id].warns++;
//         fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
//             if (err) console.log(err);
//         });

//         let embed = new RichEmbed()
//         .setDescription("Warns")
//         .setAuthor(message.author.username)
//         .setColor("RANDOM")
//         .addField("Warned User.", `<@${wUser.id}>`)
//         .addField("Warned In.", message.channel)
//         .addField("Number of Warnings.", warns[wUser.id].warns)
//         .addField("Reason.", reason);
//         return message.channel.send(embed);

//         if(warns[wUser.id].warns == 2) {
//             let muterole = message.guild.roles.find(`name`, "muted");
//             if(!muterole) return message.reply("You need to create the ```muted``` role.");
//             let mutetime = "60s";
//             await(wUser.addRole(muterole.id));
//             message.channel.send(`${wUser.tag} has been muted.`);

//             setTimeout(function() {
//                 wUser.removeRole(muterole.id)
//                 message.channel.send(`${wUser.tag} has been unmuted.`);
//             }, ms(mutetime))
//         }
//         if(warns[wUser.id].warns == 3) {
//             message.guild.member(wUser).ban(reason);
//             message.channel.send(`${wUser.tag} has been banned.`);
//         }
//     }
// }