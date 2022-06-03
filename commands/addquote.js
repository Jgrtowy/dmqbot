const { MessageEmbed } = require('discord.js');
const quotesSchema = require('../quotes-schema')

module.exports = {
    category: 'Moses quotes',
    description: 'Add a quote to the MosesDB',

    slash: true,
    testOnly: true,

    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<quote>',


    callback: async({ interaction, args }) => {
        const addquoteEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Added:\n\n\`${args}\`\n\nto the Moses Quotes DB!`)
            .setDescription('You can view all Moses Quotes by using `/viewquotes`')
            .setTimestamp()
            .setFooter({ text: 'Moses Quotes DB', iconURL: 'https://cdn.discordapp.com/avatars/315531146953752578/c74e42cfa5ab08a5daa5ede7365e2244.png?size=4096' });

        if (interaction) {
            interaction.reply({
                embeds: [addquoteEmbed]
            });
        }
        await new quotesSchema({
            quote: args.toString(),
            date: new Date()
        }).save();
    }
};