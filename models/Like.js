const {DataTypes} = require('sequelize')
const db = require('../db/conn')

// User 
const Tought = require('./Tought')
const User = require('./Users')

const Like = db.define('Like', {
    like:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        require:true
    },

})

Like.belongsTo(Tought)
User.hasMany(Like)


module.exports = Like