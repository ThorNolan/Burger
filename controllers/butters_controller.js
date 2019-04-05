//=============================== DEPENDENCIES ==========================================
var express = require("express");

var router = express.Router();

// Import the model butter.js to use its database functions.
var butter = require("../models/butter.js");

//=================================== ROUTES ============================================

// Get route for displaying all table data.
router.get("/", function(req, res) {
    butter.selectAll(function(data) {
      var hbsObject = {
        butters: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
// Post route for adding a new butter type.
router.post("/api/butters", function(req, res) {
    butter.insertOne([
      "butter_name"
    ], [
      req.body.butter_name
    ], function(result) {
      // Redirect to my route route to reload page.
      res.redirect("/");
    });
});
  
// Post route for updating "passed" status of butters by id.
router.post("/api/butters/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    butter.updateOne({
      passed: true
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // Return 404 error if no rows were changed.
        return res.status(404).end();
      } else {
        res.redirect("/");
      }
    });
});

// Post route for putting butter back to unpassed side.
router.post("/api/butters/passback/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  butter.updateOne({
    passed: false
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // Return 404 error if no rows were changed.
      return res.status(404).end();
    } else {
      res.redirect("/");
    }
  });
});


//================================== EXPORTS ============================================

// Export routes for user by my server.js.
module.exports = router;