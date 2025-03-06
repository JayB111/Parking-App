const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from backend!')
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})