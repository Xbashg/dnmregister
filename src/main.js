const BotClient = require('./BotClient/client');
const { Options } = require('discord.js');

const client = new BotClient({ 
    partials: ['USER','CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'],
    intents: 32767,
    retryLimit: 0,
    ws: { compress: false },
    makeCache: Options.cacheWithLimits({
      ...Options.defaultMakeCacheSettings,
      MessageManager: 0,
      GuildMemberManager: 5000,
      GuildInviteManager: 0,
    }),
    restGlobalRateLimit: 50,
  });

client.start();
client.setMaxListeners(200);

client.on("debug", errorText => {
    if (!errorText.includes("429")) {
      return;
    }
  
    // tslint:disable-next-line:no-console
    console.warn(`[DEBUG] [WARN] [429] ${errorText}`);
  });


  client.on('ready', () => {
    client.user.setActivity(`Orçun Dökmeci`)
    console.log(`${client.user.tag} isimli bot başarıyla şu an aktifleştirildi!`);
   });


  client.on("error", err => {
    console.error(`[HATA] ${String(err)}`);
  });