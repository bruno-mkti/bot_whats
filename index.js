const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    if (message.body.toLocaleLowerCase() === 'oi') {
        client.sendMessage(message.from, 'Ola, eu sou o seu atendente virtual!');
        client.sendMessage(message.from, 'Sobre qual assunto deseja falar? Digite a opção desejada');
        client.sendMessage(message.from, '1. Salgados');
        client.sendMessage(message.from, '2. Doces');
        client.sendMessage(message.from, '3. Bebidas');
        client.sendMessage(message.from, '4. Pastel');
    }

    if (message.body.toLocaleLowerCase() === '1') {
        client.sendMessage(message.from, 'Qual sabor você deseja?');
        client.sendMessage(message.from, 'Bolinha de queijo');
        client.sendMessage(message.from, 'Bolinha de galinha');
        client.sendMessage(message.from, 'Bolinha de camarão');
    }

    if (message.body.toLocaleLowerCase() === '2') {
        client.sendMessage(message.from, 'Qual sabor você deseja?');
        client.sendMessage(message.from, 'Brigadeiro');
        client.sendMessage(message.from, 'Leite ninho');
        client.sendMessage(message.from, 'Prestigio');
    }
    
    if (message.body.toLocaleLowerCase() === '3') {
        client.sendMessage(message.from, 'Qual sabor você deseja?');
        client.sendMessage(message.from, 'Suco de laranja');
        client.sendMessage(message.from, 'Refrigerante');
        client.sendMessage(message.from, 'Cerveja');
    }
})

client.initialize();
