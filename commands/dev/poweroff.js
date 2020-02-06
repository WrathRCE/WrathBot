module.exports = {
	name: "poweroff",
	description: "powers off the bot",
	category: "dev",
	run: async (client, message, args) => {
        if (message.author.id !== '626299452730376192') return;
        message.channel.send(`${client.user.username} Has successfully powered off.`).then(() => {
            process.exit(1);
        });
    }
}