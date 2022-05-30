const models = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

            // Authorization Check

const auth = async(req,res,next)=>{
    try {
       const token = req.cookies.JWT
        const verify = await jwt.verify(token,'Anees')
        console.log(verify)
        if(verify){
            id = verify.id
            res.locals.id = id  
            next();
        }else{
            res.send("Error 404")
        }
       
   } catch (error) {
       res.send(error)
   } 
}

// -----Function for Getting Sign Up Page/-------
const getSignup = async (req, res) => {
    try {
        console.log("I'm getting sign up")
        res.render('pages/signup')
    }
    catch (error) {
        res.send(error)
    }
}

const createUser = async (req, res) => {
    try {
        const find = await models.userModel.findOne({
            where: { email: req.body.email }

        })
        // console.log(find.email);
        console.log("Compiling Code")
        if (find) {
            console.log("Error 1")
            // location.assign('/auth/sigin')
            res.json({ find, status: false })
        }
        else {
            const { name, email, password, admin } = req.body
            const pass = await bcrypt.hash(password, 13)
            const signup = await models.userModel.create({
                name,
                email,
                password: pass,
                admin
            })
            const token = jwt.sign({ id: signup.id }, "Anees")
            res.cookie('JWT', token,{httpOnly:true,maxAge: 20000000 * 2000000})
            res.json({ signup, status: true })
        }
    }

    catch (error) {
        console.log("catch error")
        res.send(error)
    }
}
// -----Function for Getting Sign Up Page/-------

const getSignIn = async (req, res) => {
    try {
        console.log("i'm in the signin")
        res.render('pages/signin')
    }
    catch (error) {
        res.send(error)
    }
}

// -----Function for login-------
const signin = async (req, res) => {
    try {
        console.log("I'm sigining in")
        const { email, password } = req.body;
        console.log(password)
        const find = await models.userModel.findOne(
            {
                where: { email: email }
            })
        console.log(find.admin)
        if (find.email == null) {
            res.send("Please Sign Up First Please")
        }
        else {
            const bpass = await bcrypt.compare(password, find.password)
            console.log("I'm in Else")
            // const token = jwt.sign({id:1},'hassam')
            if (bpass == true && find.admin == true) {
                const token = jwt.sign({ id : find.id }, "Anees")
                res.cookie('JWT', token,{httpOnly:true,maxAge: 20000000 * 2000000})
                res.json({ status: true })
            } else if(bpass == true) {
                const token = jwt.sign({ id : find.id }, "Anees")
                res.cookie('JWT', token,{httpOnly:true,maxAge: 20000000 * 2000000})
                res.json({ status: false })
            }else{
            res.send('Your Password or Email is Incorrect')
        }
        }
    }
    catch (error) {
        res.send(error)
    }
}


const logout = async (req,res)=>{
    res.clearCookie('JWT')
    res.redirect('http://localhost:3500/homepage')
}

module.exports = { auth, createUser, signin, getSignup, getSignIn,logout }
