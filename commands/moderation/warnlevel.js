// const { RichEmbed } = require("discord.js");
// const fs = require("fs");
// const ms = require("ms");
// let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

// module.exports = {
//     name: "warnlevel",
//     category: "moderation",
//     description: "checks the members warnings",
//     usage: "<id | mention>",
//     run: async (client, message, args) => {
//         if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You cannot warn that person, Missing permission");
//         let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//         if(!wUser) return message.channel.send("Unable to find that person.");
//         let warnlevel = warns[wUser.id].warns;
//         message.channel.send(`<@${wUser.id}> has ${warnlevel} warnings.`);
//     }
// }