const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTc4Nzg4NTY2NjgxMzg3MTM4.GpIfFz.CPd2R1L6PSGgmhE3JJFzLmgiW76_I_HzfwZ_wU"

const client = new Discord.Client({
    intents: [
    "GUILDS",
    "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)