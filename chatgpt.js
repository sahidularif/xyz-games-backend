const express = require('express');
const crypto = require('crypto');
const axios = require('axios');

const app = express();

// Integration credentials
const merchantId = 'YOUR_MERCHANT_ID';
const merchantKey = 'YOUR_MERCHANT_KEY';
const baseApiUrl = 'https://example.com/api/v1';

// Generate X-Sign header
const generateXSign = (url, timestamp, nonce, requestParams) => {
  const mergedParams = { ...requestParams, 'X-Merchant-Id': merchantId, 'X-Timestamp': timestamp, 'X-Nonce': nonce };
  const sortedParams = Object.keys(mergedParams)
    .sort()
    .map((key) => `${key}=${mergedParams[key]}`);
  const queryString = sortedParams.join('&');
  const signString = `${url}?${queryString}`;
  const signature = crypto.createHmac('sha1', merchantKey).update(signString).digest('hex');
  return signature;
};

// Get games list
const getGames = async () => {
  const url = `${baseApiUrl}/games`;
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.createHash('md5').update(timestamp).digest('hex');
  const headers = {
    'X-Merchant-Id': merchantId,
    'X-Timestamp': timestamp,
    'X-Nonce': nonce,
    'X-Sign': generateXSign(url, timestamp, nonce, {}),
  };

  try {
    const response = await axios.get(url, { headers });
    if (response.status === 200) {
      const games = response.data.items || [];
      return games;
    } else {
      console.log('Failed to retrieve games list.');
      return [];
    }
  } catch (error) {
    console.error('Failed to retrieve games list:', error);
    return [];
  }
};

// Initialize game session
const initGame = async (gameUuid, playerId, playerName, currency, sessionId, returnUrl, language, email) => {
  const url = `${baseApiUrl}/games/init`;
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.createHash('md5').update(timestamp).digest('hex');
  const requestParams = {
    game_uuid: gameUuid,
    player_id: playerId,
    player_name: playerName,
    currency,
    session_id: sessionId,
  };
  if (returnUrl) {
    requestParams.return_url = returnUrl;
  }
  if (language) {
    requestParams.language = language;
  }
  if (email) {
    requestParams.email = email;
  }
  const headers = {
    'X-Merchant-Id': merchantId,
    'X-Timestamp': timestamp,
    'X-Nonce': nonce,
    'X-Sign': generateXSign(url, timestamp, nonce, requestParams),
  };

  try {
    const response = await axios.post(url, requestParams, { headers });
    if (response.status === 200) {
      const gameUrl = response.data.url;
      return gameUrl;
    } else {
      console.log('Failed to initialize game session.');
      return null;
    }
  } catch (error) {
    console.error('Failed to initialize game session:', error);
    return null;
  }
};

// Example usage
app.get('/games', async (req, res) => {
  const games = await getGames();
  if (games.length > 0) {
    const gameUuid = games[0].uuid;
    const playerId = 'YOUR_PLAYER_ID';
    const playerName = 'YOUR_PLAYER_NAME';
    const currency = 'USD';
    const sessionId = 'YOUR_SESSION_ID';
    const gameUrl = await initGame(gameUuid, playerId, playerName, currency, sessionId);
    if (gameUrl) {
      res.send(`Game URL: ${gameUrl}`);
    } else {
      res.status(500).send('Failed to get game URL.');
    }
  } else {
    res.status(404).send('No games available.');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
