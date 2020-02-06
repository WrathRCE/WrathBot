const { RichEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
	name: "cat",
	description: "sends a cat gif or image",
	category: "animals",
	run: async (bot, message, args,) => {
		let {body} = await superagent
		.get(`http://aws.random.cat/meow`);

		let embed = new RichEmbed()
		.setColor("RANDOM")
		.setTitle(":cat: Cat :cat:")
		.setImage(body.file);

		return message.channel.send(embed);
	}
}