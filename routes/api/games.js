const express = require("express");
const router = express.Router();
const axios = require('axios');
const cryptoo = require('crypto')
const querystring = require('querystring')
const url = require('url');
const cors = require("cors");

//index, show
const apiUrl = 'https://staging.slotegrator.network/api/index.php/v1/games';
const merchantId = '1a2fc693659a847a9239746ae3709143';
const merchantKey = '346cfad54cc098d7dde4ea3a7d8178016149e7a9';
const time = Math.floor(Date.now() / 1000).toString();

const nonce = cryptoo
  .createHash('md5')
  .update(cryptoo.randomBytes(16))
  .digest('hex');

const headers = {
  'X-Merchant-Id': merchantId,
  'X-Timestamp': time,
  'X-Nonce': nonce,
};
// X-Sign generate
function calculateXSign(headers, params) {
  const mergedObject = { ...headers, ...params };
  const sortedKeys = Object.keys(mergedObject).sort();
  const sortedObject =
    sortedKeys.reduce((obj, key) => {
      obj[key] = mergedObject[key];
      return obj;
    }, {});
  const queryString = querystring.stringify(sortedObject);
  const hmac = cryptoo.createHmac('sha1', merchantKey);
  hmac.update(queryString);
  const sign = hmac.digest('hex');
  return { sign, queryString };
}

// GET game list
router.get('/gamelist', async (req, res) => {

  const time = Math.floor(Date.now() / 1000).toString();
  const headers = {
    'X-Merchant-Id': merchantId,
    'X-Timestamp': time,
    'X-Nonce': nonce,
  };
  const requestParams = {
    page: 1,
  };

  const { sign } = calculateXSign(headers, requestParams)
  const requestOptions = {
    headers: {
      'X-Merchant-Id': merchantId,
      'X-Timestamp': time,
      'X-Nonce': nonce,
      'X-Sign': sign,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const apiUrlWithQuery = url.format({
      pathname: apiUrl, query: requestParams
    });
    const response = await axios.get(apiUrlWithQuery, requestOptions);
    console.log('data successfully fetched!');
    res.header("Access-Control-Allow-Origin", "*");
    res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
    res.status(500).json({
      error:
        error.message
    });
  }
});


// Init game
router.post('/gameinit', async (req, res) => {
  const { currency, game_uuid, player_id, player_name, session_id } = req.query;
  const time = Math.floor(Date.now() / 1000).toString();
  const headers = {
    'X-Merchant-Id': merchantId,
    'X-Timestamp': time,
    'X-Nonce': nonce,
  };
  const requestParams = {
    currency: currency,
    game_uuid: game_uuid,
    player_id: player_id,
    player_name: player_name,
    language: 'en',
    session_id: session_id,
    return_url: 'https://betbay.io/game/callback/datas/',
  };

  const { sign, queryString } = calculateXSign(headers, requestParams)

  const options = {
    method: 'POST',
    headers: {
      'X-Merchant-Id': merchantId,
      'X-Timestamp': time,
      'X-Nonce': nonce,
      'X-Sign': sign,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: queryString
  };
  try {

    const apiUrlWithQuery = url.format({ pathname: `${apiUrl}/init` });
    const response = await axios(apiUrlWithQuery, options);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error:
        error.message
    });
  }
});

const isToday = (someDate) => {
  const today = new Date()
  someDate = new Date(someDate)
  return (someDate.getDate() ==
    today.getDate() && someDate.getMonth() == today.getMonth()
    && someDate.getFullYear() == today.getFullYear());
}
router.get('/index', (req, res) => {
  Game.find().then(games => {
    const todaysGames = games.filter(game => isToday(game.start_time))
    return res.json(todaysGames)
  })
})

// router.get('/:gameId', (req, res) => {
//   Game.findById(req.params.gameId, (err,
//     game) => {
//     if (!!game) {
//       return res.json(game)
//     } else {
//       return res.status(404).json({
//         "msg":
//           "Game not found"
//       })
//     }
//   })
// })
module.exports = router;