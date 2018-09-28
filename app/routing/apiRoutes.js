
var friendsData = require("../data/friends.js");

module.exports = function(app) { 

   app.get("/api/userData", function(req, res) {
    res.json(friendsData); // this must match the var up there
  });
// condition to what gets posted
  app.post("/api/userData", function(req, res) {    
    var newFriend = req.body;
    var scoreArray = req.body.scores.map(Number);
    friendsData.push(newFriend);

    var score = req.body.scores;

  console.log(scoreArray);


   const userTotal = scoreArray.reduce((total, amount) => total + amount);
  
   console.log("the total is " + userTotal);
  // console.log(total);
// initiate for loop
   
    

   
    
    
  });

};
