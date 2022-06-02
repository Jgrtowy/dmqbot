const fs = require('fs');
// const quotesSchema = require('./quotes-schema');

module.exports = function sendQuote() {
    let jsonRawData = fs.readFileSync('bullshit/quotes.json');
    let jsonParsed = JSON.parse(jsonRawData);

    const quotesArray = Object.values(jsonParsed);
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomIndex][0];
    const date = new Date(quotesArray[randomIndex][1]);
    console.log(randomIndex);
    console.log(`\nSending quote #${randomIndex + 1}\n"${randomQuote}"\nIt was said: ${date}\n`);


    // const asd = async() => {
    //     // console.log(`The connection state is "${state}"`);

    //     let dbArray = await quotesSchema.find({});
    //     const quotesArray = [];
    //     dbArray.forEach(quote => {
    //         quotesArray.push(quote);
    //     });
    //     const randomDocumentIndex = Math.floor(Math.random() * dbArray.length);
    //     console.log(randomDocumentIndex);
    //     console.log(quotesArray[randomDocumentIndex]['quote']);
    // };
    // asd()



    const color = ["#ff00ff", "#ff0000", "#ff6f00", "#fff200", "#33ff00", "#00c8ff", "#8c00ff"];
    //sun mon tue wed thu fri sat


    const { Webhook, MessageBuilder } = require('discord-webhook-node');
    const hook = new Webhook("https://discord.com/api/webhooks/980816057419833365/w4ui_9JDKRbyZC8qRsDTDZDthb6m-2_aCD4jYe26Z3u0b-wgMNgZUweYZKTg2_JWrByP");


    const embed = new MessageBuilder()
        .setTitle(`"${randomQuote}"`)
        .setText(`<@ & 980814138869698641> Here is a random Moses quote for today! \`#${randomIndex + 1}\``)
        .setColor(color[new Date().getDay()])
        .setFooter('Said by Moses on', 'https://cdn.discordapp.com/attachments/980813644948463656/980822911600447558/moses.jpeg?size=4096')
        .setTimestamp(date);

    hook.send(embed);
};