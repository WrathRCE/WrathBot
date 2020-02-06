const { RichEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
	name: "dog",
	description: "Sends a dog pic or gif",
	category: "animals",
	run: async (bot, message, args,) => {
		let {body} = await superagent
		.get(`https://random.dog/woof.json`);

		let embed = new RichEmbed()
		.setColor("RANDOM")
		.setTitle(":dog: Doggo :dog:")
		.setImage(body.url)
		return message.channel.send(embed);
	}
}