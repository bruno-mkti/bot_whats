const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');

// Configuração para armazenar a sessão localmente
const client = new Client({
    authStrategy: new LocalAuth() // Salva a sessão automaticamente
});

client.on('qr', qr => {
    console.log("Escaneie o QR Code para autenticar:");
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot está pronto e conectado!');
});

client.on('message', message => {
    if (message.body.toLocaleLowerCase() === 'oi') {
        client.sendMessage(message.from, 'Olá, eu sou o seu atendente virtual!');
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
});

client.initialize();
