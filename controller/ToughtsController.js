const Tought = require('../models/Tought')
const User = require('../models/Users')

module.exports = class ToughtsController{
    static async showToughts(req,res){
        res.render('toughts/home')
    }
}