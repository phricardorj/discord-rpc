const dotenv = require('dotenv');
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
dotenv.config();

const activity = {
    details: "I'm coding something here 👨‍💻",
    assets: {
        large_image: 'logo',
        large_text: 'Hi!',
        small_image: 'ig',
        small_text: '@phricardorj',
    },
    timestamps: { start: Date.now() },
    instance: true,
};

client.on('ready', () => {
    client.request('SET_ACTIVITY', { pid: process.pid, activity: activity });
    console.log('Ready! Your Discord Presence Rich is running!!');
});

client.login({ clientId: process.env.CLIENT_ID }).catch(console.error);
