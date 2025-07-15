const express = require('express');
const {handleGenerateNewShortURL} = require("../controller/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL)

module.exports = router;

// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('URL route working!');
// });

// module.exports = router;
