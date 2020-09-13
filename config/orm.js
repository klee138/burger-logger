const connection = require("../config/connection.js");
function makeQuestionMarks(num) {
    var array = [];
  
    for (let i = 0; i < num; i++) {
      array.push("?");
    }
    return array.toString();
  }
  
  function convertSql(object) {
      var array = [];
      for (var key in object) {
          var value = object[key];
          if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
            }
            array.push(key + "=" + value);
      }
    }
    return array.toString();
  }
var orm = {
    selectAll: function(tableInput, cb) {
        var allQuery = `SELECT * FROM ${tableInput}`;
        connection.query(allQuery, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var oneQuery =
        "INSERT INTO " +
        table +
        " (" +
        cols.toString() +
        ") " +
        "VALUES (" +
        makeQuestionMarks(vals.length) +
        ") ";

        connection.query(oneQuery, vals, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function(table, objColumnVals, condition, cb) {
        var updateOneQuery =
        "UPDATE " +
        table +
        " SET " +
        convertSql(objColumnVals) +
        " WHERE " +
        condition;

        connection.query(delQuery, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    deleteOne: function(table, condition, cb) {
        var delQuery = 'DELETE FROM ${table} WHERE + ${condition};';

        connection.query(delQuery, function(err,res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};
module.exports = orm;