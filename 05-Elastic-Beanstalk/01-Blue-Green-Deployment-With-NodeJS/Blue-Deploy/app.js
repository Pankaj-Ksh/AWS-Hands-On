const express = require('express');
const path = require('path');
const app = express();

// Serve static assets
app.use(express.static(path.join(__dirname)));

// Route for root (homepage)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Example dynamic route
app.get('/about', (req, res) => {
  res.send(`
    <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #2F2E41;
      color: #00D8FF;
      font-family: Arial, sans-serif;
      flex-direction: column;
      text-align: center;
    ">
      <h2>This is a dynamic Node.js app on Elastic Beanstalk</h2>
      <p>Managed by <strong>Pankaj</strong></p>
    </div>
  `);
});



// Port for Elastic Beanstalk or local testing
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

