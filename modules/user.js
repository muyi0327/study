/**
 * Created by Administrator on 15-4-18.
 */
class User {
    constructor (name, password, address){
        this.name = name;
        this.password = password;
        this.address = address;
    }

    checkLogin (req, res, next){
        if(!(req.path.indexOf('user') >= 0)){
            return res.redirect('/users/login');
        }
        next();
    }
}

module.exports = User;