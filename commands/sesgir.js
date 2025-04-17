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
const config = {
  VOICE_CHANNEL_ID: '1361671422694391960', // Replace with voice channel ID
  BOT_TOKEN: 'YOUR_BOT_TOKEN' // Replace with your bot token
};

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
