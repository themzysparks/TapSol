const express = require('express');
const device = require('express-device');
const app = express();
const port = process.env.PORT || 3000;
const host = "192.168.65.229";
// Set EJS as the view engine
app.set('view engine', 'ejs');
const TelegramBot = require('node-telegram-bot-api');
//Your bot token from BotFather
const TOKEN = '7384262901:AAG-0QlYzQQDOPV2sUxieD6bWzTUxZg1Cfg';
const bot = new TelegramBot(TOKEN, { polling: true });

// Use device detection middleware
app.use(device.capture());

// Define a route for the homepage
app.get('/', (req, res) => {
    if (req.device.type === 'desktop') {
        // Render desktop view
        res.render('desktop');
    } else {
        // Render mobile view
        res.render('index', { title: 'TapSol', message: 'Welcome to My Node.js Website!' });
    }
});

// Serve static assets
app.use(express.static('public'));

// Start the server
app.listen(port, host, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


//const TelegramBot = require('node-telegram-bot-api');
// Your bot token from BotFather
//const TOKEN = '7384262901:AAG-0QlYzQQDOPV2sUxieD6bWzTUxZg1Cfg';
// const bot = new TelegramBot(TOKEN, { polling: true });
// // Telegram bot setup
// Listen for messages
// Listen for messages
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  
    // Inline keyboard markup with a URL button
    const keyboard = {
      inline_keyboard: [
        [{ text: 'Start Playing', url: 't.me/TapSolBot/TapSol', callback_data: 'game_start' }],
      ],
    };
  
    // Send a message with the inline keyboard markup
    bot.sendMessage(chatId, 'Click on start below to start playing the game:', {
      reply_markup: JSON.stringify(keyboard),
    });
  });
  
  // Listen for callback queries
  bot.on('callback_query', (callbackQuery) => {
    const data = callbackQuery.data;
    const message = callbackQuery.message;
  
    if (data === 'game_start') {
      // Handle the callback for starting the game here if needed
      bot.answerCallbackQuery(callbackQuery.id, 'Starting the game...');
    }
  });
  
