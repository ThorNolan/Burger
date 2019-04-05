//=============================== DEPENDENCIES ==========================================

// Import the ORM to create functions that will interact with my database.
var orm = require("../config/orm.js");

//================================= FUNCTIONS ===========================================

// Create butter object imbued with functions from my ORM.
var butter = {
    // Select all butters from butters table.
    selectAll: function(cb) {
      orm.selectAll("butters", function(res) {
        cb(res);
      });
    },

    // Insert new butter into table.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("butters", cols, vals, function(res) {
        cb(res);
      });
    },

    // Update "passed" butter attribute.
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("butters", objColVals, condition, function(res) {
        cb(res);
      });
    }
};

//================================== EXPORTS ============================================

// Export my butter object for use by my controller.
module.exports = butter;
