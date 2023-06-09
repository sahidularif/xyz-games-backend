const express = require("express");
const router = express.Router();
const Game = require('../../models/Game')
//const crypto = require('crypto-js');
//const md5 = require("crypto-js/md5");
const axios = require('axios');

const crypto = require('crypto-js');
const md5 = crypto.MD5;
const HmacSHA1 = crypto.HmacSHA1;

const cryptoo = require('crypto')
//index, show


const isToday = (someDate) => {
  const today = new Date()
  someDate = new Date(someDate)
  return (someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear());
}

router.get('/index', (req, res) => {
  Game.find().then(games => {
    const todaysGames = games.filter(game => isToday(game.start_time))
    return res.json(todaysGames)
  })
})


router.get('/gamelist', async (req, res) => {

//   const url = 'https://staging.slotegrator.network/api/index.php/v1/games';
//   const merchantId = '1a2fc693659a847a9239746ae3709143';
//   const merchantKey = '346cfad54cc098d7dde4ea3a7d8178016149e7a9';
//   //const nonce = crypto.createHash('md5').update(uniqid(mt_rand(), true)).digest('hex');
//   const nonce       = md5(Math.random().toString());
//   const time = Math.floor(Date.now() / 1000).toString();

//   const headers = {
//     'X-Merchant-Id': merchantId,
//     'X-Timestamp': time,
//     'X-Nonce': nonce,
//   };

//   const requestParams = {
//     page: '1',
//   };
 
//   const mergedParams = { ...requestParams, ...headers };
//   const sortedParams = Object.keys(mergedParams)
//     .sort()
//     .reduce((obj, key) => {
//       obj[key] = mergedParams[key];
//       return obj;
//     }, {});

//   const hashString = new URLSearchParams(sortedParams).toString();

//   //const XSign = HmacSHA1(hashString, merchantKey).toString(crypto.enc.Hex);
//   //const XSign = crypto.Hmac('sha1', hashString, merchantKey);
//   // const XSign = crypto
//   //   .createHmac('sha1', merchantKey)
//   //   .update(hashString)
//   //   .digest('hex');
 

//   // const XSign = crypto.createHmac('sha256', merchantKey)                    
//   //                  // updating data
//   //                  .update(hashString) 
//   //                  // Encoding to be used
//   //                  .digest('hex');
  
//  const XSign = cryptoo.createHmac('sha1', merchantKey).update(hashString).digest('hex');
//  //const XSign ='ec2e242513d0405cfefdbd52d010cc43f3faebb7';

//   //console.log(XSign);

//   const requestOptions = {
//     headers: {
//       'X-Merchant-Id': merchantId,
//       'X-Timestamp': time,
//       'X-Nonce': nonce,
//       'X-Sign': XSign,
//       'Accept': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   };

  try {
    //const response = await axios.get(url, requestOptions);
    const response = await axios.get('http://xyz.polwel.com/');
    console.log(response);
    //res.json(response.data);
  } catch (error) {
    console.error(error);
    //res.status(500).json({ error: 'Internal Server Error' });
  }

  //console.log(response);

  // const url = 'https://staging.slotegrator.network/api/index.php/v1/games';
  // const merchantId = '1a2fc693659a847a9239746ae3709143';
  // const merchantKey = '346cfad54cc098d7dde4ea3a7d8178016149e7a9';
  // const nonce = crypto.createHash('md5').update(crypto.randomBytes(16)).digest('hex');
  // //const nonce       = md5(Math.random().toString());   
  // const time = Math.floor(Date.now() / 1000);

  // const headers = {
  //   'X-Merchant-Id': merchantId,
  //   'X-Timestamp': time,
  //   'X-Nonce': nonce,
  // };

  // const requestParams = {
  //   page: '2',
  // };

  // const mergedParams = { ...requestParams, ...headers };
  // const sortedParams = Object.fromEntries(Object.entries(mergedParams).sort());

  // const hashString = new URLSearchParams(sortedParams).toString();
  // const XSign = crypto.createHmac('sha1', merchantKey).update(hashString).digest('hex');

  // try {
  //   const response = await axios.get(url, {
  //     headers: {
  //       'X-Merchant-Id': merchantId,
  //       'X-Timestamp': time,
  //       'X-Nonce': nonce,
  //       'X-Sign': XSign,
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     params: requestParams,
  //   });

  //   res.json(response.data);
  // } catch (error) {
  //   console.error('Error:', error);
  //   res.status(500).json({ error: 'An error occurred' });
  // }

});




router.get('/:gameId', (req, res) => {
  Game.findById(req.params.gameId, (err, game) => {
    if (!!game){
      return res.json(game)
    } else {
      return res.status(404).json({"msg": "Game not found"})
    }
  })
})







  // Game Launch
  router.get('/launch', (req, res) => {
    // Redirect the player to the URL returned by /games/init, /games/init-demo, or another appropriate endpoint
    const gameLaunchURL = getGameLaunchURL(); // Replace this with your logic to obtain the launch URL
    res.redirect(gameLaunchURL);
  });

  // Integrator Endpoint for Game Aggregator communication
  router.post('/callback/datas', (req, res) => {
    const { headers, body } = req;

    // Validate the authorization headers (X-Merchant-Id, X-Timestamp, X-Nonce, X-Sign)
    if (!validateAuthorizationHeaders(headers, body)) {
      //res.status(401).send('Unauthorized');
      //return;
    }

    // Process the Game Aggregator's calls based on the action parameter
    switch (body.action) {
      case 'balance':
        // Handle Balance request
        const balanceResponse = handleBalanceRequest(body.player_id, body.currency, body.session_id);
        res.status(200).json(balanceResponse);
        break;
      case 'win':
        // Handle Win notification
        handleWinNotification(body.player_id, body.amount);
        res.sendStatus(200);
        break;
      case 'bet':
        // Handle Bet notification
        handleBetNotification(body.player_id, body.amount);
        res.sendStatus(200);
        break;
      case 'refund':
        // Handle Refund request
        handleRefundRequest(body.player_id, body.amount);
        res.sendStatus(200);
        break;
      default:
        res.status(400).send('Bad Request');
    }
  });

  // Helper function to validate the authorization headers
  function validateAuthorizationHeaders(headers, body) {
    const { 'x-merchant-id': merchantId, 'x-timestamp': timestamp, 'x-nonce': nonce, 'x-sign': sign } = headers;
    const { merchantKey } = getIntegrationManagerCredentials(); // Replace with your logic to retrieve the Merchant Key
    const mergedParams = { ...body, 'x-merchant-id': merchantId, 'x-timestamp': timestamp, 'x-nonce': nonce };
    const sortedParams = Object.keys(mergedParams).sort();
    const hashString = sortedParams.map(key => `${key}=${mergedParams[key]}`).join('&');
    const expectedSign = crypto.createHmac('sha1', merchantKey).update(hashString).digest('hex');
    return sign === expectedSign;
  }

  // Handler functions for different actions
  function handleBalanceRequest(playerId, currency, sessionId) {
    // Implement your logic to handle the Balance request
    // Example:
    const balance = getPlayerBalance(playerId, currency, sessionId); // Replace this with your logic to retrieve the player's balance
    return {
      balance: balance
    };
  }

  function handleWinNotification(playerId, amount) {
    // Implement your logic to handle the Win notification
    // Example:
    updatePlayerBalance(playerId, amount); // Replace this with your logic to update the player's balance
  }

  function handleBetNotification(playerId, amount) {
    // Implement your logic to handle the Bet notification
    // Example:
    updatePlayerBalance(playerId, -amount); // Replace this with your logic to update the player's balance
  }

  function handleRefundRequest(playerId, amount) {
    // Implement your logic to handle the Refund request
    // Example:
    updatePlayerBalance(playerId, amount); // Replace this with your logic to update the player's balance
  }


    // Helper functions for handling player balance
  function getPlayerBalance(playerId, currency, sessionId) {
    // Implement your logic to retrieve the player's balance
    // Example:
    const balance = 50.4 // Replace this with your logic to fetch the player's balance from the database or any other source
    return balance;
  }

  function updatePlayerBalance(playerId, amount) {
    // Implement your logic to update the player's balance
    // Example:
    // Update the player's balance in the database or any other source based on the provided amount
  }



module.exports = router;