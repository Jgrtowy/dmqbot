const { MessageEmbed } = require('discord.js');
const quotesSchema = require('../quotes-schema')

module.exports = {
    category: 'Moses quotes',
    description: 'Display all the currently stored Moses Quotes',

    slash: true,
    testOnly: true,

    callback: async({ interaction }) => {

        const quotesArray = await quotesSchema.find({});
        var quotesString = '';

        quotesArray.every(quote => {
            quotesString += `**#${quotesArray.indexOf(quote)}** \`${quote['quote']}\`,\n`;
            if (quotesString.length > 4000) {
                quotesString += '**+more**';
                return false;
            } else return true;
        });

        const viewquotesEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Here are all the currently stored Moses Quotes:')
            .setDescription(quotesString)
            .setTimestamp()
            .setFooter({ text: 'Moses Quotes DB', iconURL: 'https://cdn.discordapp.com/avatars/315531146953752578/c74e42cfa5ab08a5daa5ede7365e2244.png?size=4096' });
        if (interaction) {
            interaction.reply({
                embeds: [viewquotesEmbed]
            });
        }
    }
};