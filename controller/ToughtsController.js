const { where } = require("sequelize");
const Tought = require("../models/Tought");
const User = require("../models/Users");

const {Op} = require('sequelize')


module.exports = class ToughtsController {
  static async showToughts(req, res) {
    let search = ''

    if(req.query.search){
      search = req.query.search
    }
    const toughtsData = await Tought.findAll( {
      include: User,
      where: {
        title: {[Op.like]: `%${search}%`}
      }
    })
    const toughts = toughtsData.map((result) => result.get({plain:true}));

    let toughtsQty = toughts.length

    if(toughtsQty === 0){
      toughtsQty = false
    }


    res.render("toughts/home", {toughts, search,toughtsQty});
  }



  static async dashboard(req, res) {
    const userid = req.session.userid;

    const user = await User.findOne({
      where: { id: userid },
      include: Tought,
      plain: true,
    });

    // check if user exists
    if (!user) {
      res.redirect("/login");
    }
    const toughts = user.Toughts.map((result) => result.dataValues);

    let emptyToughts = false 

    if(toughts.length === 0 ){
      emptyToughts = true
    }

    res.render("toughts/dashboard", { toughts ,emptyToughts });
  }

  static createToughts(req, res) {
    res.render("toughts/create");
  }

  static async createToughtsPost(req, res) {
    const post = {
      title: req.body.title,
      UserId: req.session.userid,
    };

    try {
      await Tought.create(post);
      req.flash("message", "Pensamento criado com sucesso!");
      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async removeTought(req, res) {
    const id = req.body.id;
    const UserId = req.session.userid;

    try {
      await Tought.destroy({ where: { id: id, UserId: UserId } });
      
      req.flash("message", "Pensamento removido com sucesso!");
      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (error) {
      console.log(erro);
    }
  }

  static async updadteTought(req,res){
    const id = req.params.id 

    const toughts = await Tought.findOne({where:{id:id}, raw: true})

    res.render('toughts/edit' , {toughts})

  }

  static async updadteToughtSave(req,res){
     
    const id = req.body.id
    const tought = {
      title: req.body.title
    }
  try {
    await Tought.update(tought, {where:{id:id}})
    
    req.flash("message", "Atualizado com sucesso!");
      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
  } catch (error) {
    console.log(error)
  }

  }
};
