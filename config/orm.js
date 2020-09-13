const connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var allQuery = 'SELECT * FROM ${tableInput}';
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