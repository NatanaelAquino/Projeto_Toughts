const {DataTypes} = require('sequelize')
const db = require('../db/conn')

// User 
const Tought = require('./Tought')
const User = require('./Users')

const Comments = db.define('Comments', {
    title:{
        type: DataTypes.STRING,
        allowNull:false,
        require:true

    },

})

Comments.belongsTo(Tought)
Tought.hasMany(Comments)
Comments.belongsTo(User)
User.hasMany(Comments)


module.exports = Comments