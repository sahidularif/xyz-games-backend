const express = require("express");
const router = express.Router();
const Game = require('../../models/Game')
//const crypto = require('crypto-js');
//const md5 = require("crypto-js/md5");
const axios = require('axios');
const cryptoo = require('crypto')
const querystring = require('querystring')
const url = require('url');
const cors = require("cors");
//index, show
router.use(cors({
  origin: ["https://xyz-games-frontend.netlify.app", "http://localhost:3000"]
}));

router.get('/gamelist'
  , async (req, res) => {
    const apiUrl =
      'https://staging.slotegrator.network/api/index.php/v1/games';
    const merchantId = '1a2fc693659a847a9239746ae3709143';
    const merchantKey = '346cfad54cc098d7dde4ea3a7d8178016149e7a9';
    const time = Math.floor(Date.now() / 1000).toString(); // Current timestamp in
    
    const nonce = cryptoo
      .createHash('md5')
      .update(cryptoo.randomBytes(16))
      .digest('hex');
    const headers = {
      'X-Merchant-Id': merchantId,
      'X-Timestamp': time,
      'X-Nonce': nonce,
    };
    const requestParams = {
      page: '1'
      ,
    };
    const mergedObject = { ...headers, ...requestParams };
    const sortedKeys = Object.keys(mergedObject).sort();
    const sortedObject =
      sortedKeys.reduce((obj, key) => {
        obj[key] = mergedObject[key];
        return obj;
      }, {});
    const queryString = querystring.stringify(sortedObject);
    const hmac = cryptoo.createHmac('sha1', merchantKey);
    hmac.update(queryString);
    const xSign = hmac.digest('hex');
    const requestOptions = {
      headers: {
        'X-Merchant-Id': merchantId,
        'X-Timestamp': time,
        'X-Nonce': nonce,
        'X-Sign': xSign,
        'Accept': 'application/json',
        'Content-Type': 'application/x- www - form - urlencoded',
      },
    };
    try {
      const apiUrlWithQuery = url.format({
        pathname: apiUrl, query: requestParams
      });
      const response = await axios.get(apiUrlWithQuery, requestOptions);
      console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.log(error);
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
router.get('/:gameId', (req, res) => {
  Game.findById(req.params.gameId, (err,
    game) => {
    if (!!game) {
      return res.json(game)
    } else {
      return res.status(404).json({
        "msg":
          "Game not found"
      })
    }
  })
})
module.exports = router;