//=============================== DEPENDENCIES ==========================================

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//================================= FUNCTIONS ===========================================

// Create burger object imbued with functions from my orm.
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
};

//================================== EXPORTS ============================================

// Export my burger object for use by my controller.
module.exports = burger;
