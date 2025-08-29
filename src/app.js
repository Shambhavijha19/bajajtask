const express = require('express');
const bfhl = require('./routes/bfhl');
const app = express();

app.use(express.json());
app.use('/bfhl', bfhl);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});