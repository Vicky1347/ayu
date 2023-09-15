// Import the Express framework and the Axios library
const express = require('express');
const axios = require('axios');

// Create an Express app
const app = express();

// Use JSON middleware to parse the request body
app.use(express.json());

// Define a port number for the app to listen on
const port = 3000;

app.get('/', (req, res) =>{
    res.send("hii");
});

// Define a route for handling POST requests from Dialogflow
app.post('/', async (req, res) => {
  
    // Get the intent name and the parameters from the request body
  const intent = req.body.queryResult.intent.displayName;
  const parameters = req.body.queryResult.parameters;
  const ques = req.body.queryResult.queryText;
  const resultt = req.body.queryResult;
  
  console.log(typeof(req));
  console.log(ques);
  console.log(resultt);



     


      res.json({
        fulfillmentText: 'Sorry, I could not get the weather information for that city.',
      });
   
  });

// Start the app and listen on the port number
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
