// auto_join.js
const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

// Configuration (Edit these values)
const targetChannel = client.channels.cache.get(process.env.VOICE_CHANNEL_ID);
client.login(process.env.BOT_TOKEN);

client.once('ready', () => {
  try {
    const targetChannel = client.channels.cache.get(config.VOICE_CHANNEL_ID);
    
    if (!targetChannel?.isVoiceBased()) {
      throw new Error('Invalid voice channel or channel not found');
    }

    const connection = joinVoiceChannel({
      channelId: targetChannel.id,
      guildId: targetChannel.guild.id,
      adapterCreator: targetChannel.guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: false
    });
    
    console.log(`[EN] Successfully connected to: ${targetChannel.name}`);
    
  } catch (error) {
    console.error('[EN] Connection error:', error.message);
    process.exit(1);
  }
});

client.login(config.BOT_TOKEN);
