import { userModel } from "../dao/models/user.model.js"
import { isValidPassword } from "../utils/bcrypt.js"

export const checkAuth=(req,res,next) => {
  if (!req.session?.user)
    return res.redirect("/login")
  else
    next()
}


export const checkExistingUser=(req,res,next) => {
  if (req.session?.user)
    return res.redirect("/products")
  else
    next()
}


export const authorization = (role) => {
  return async (req, res, next) => {
    if(req.session?.user?.rol !== role){
      return res.status(403).send({error: 'No permissions'});
    }
    next();
  }
}