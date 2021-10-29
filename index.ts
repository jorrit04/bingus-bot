import DiscordJS, { Intents, Message, ReactionEmoji } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'bingus') {
        message.reply({
            content: 'bongus'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'good boi bingus') {
        message.reply({
            content: 'meow meow'
        })
    }
})


client.login(process.env.TOKEN)