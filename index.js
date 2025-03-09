const express = require('express');
const { create } = require('express-handlebars');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()
const conn = require('./db/conn')


// models 
const Tought = require('./models/Tought');
const User = require('./models/Users');
const Comments = require('./models/Comments');

// import routes
const ToughtRouter = require('./routes/ToughtRouter');
const authRouter = require('./routes/authRouter');

//import controller 
const ToughtsController = require('./controller/ToughtsController');


//template engine
app.engine('handlebars', create().engine)
app.set('view engine', 'handlebars')

// receber resposta do body
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())

// session middleware 
app.use(
    session({
        name:'session',
        secret:"nosso_secret",
        resave:false,
        saveUninitialized:false,
        store: new FileStore({
            logFn:function(){},
            path:require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie:{
            secure:false,
            maxAge:360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    }),
)


// flash messages
app.use(flash())

//public path 
app.use(express.static('public'))

// set session to res 
app.use((req,res,next)=>{
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
})
//ROUTES 
app.use('/toughts', ToughtRouter)
app.use('/', authRouter)
app.get('/', ToughtsController.showToughts)

conn 
    .sync({force:true})
    .then(()=>{
        app.listen(3000)
    })
    .catch((err) => console.log(err))
