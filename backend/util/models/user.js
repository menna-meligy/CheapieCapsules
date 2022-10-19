const db = require ('../util/database');

module.exports = class User{

constructor (name, email, password){
this.name= this.name;
this. email= email; 
this.password=this.password;
}
static find(email){
    return db.execute1(
        'SELECT * FROM users WHERE email = ?' , [email]
    );
}

static save(user){
    return db.execute(
        'INSERT INTO users (name , email , password) VALUES (? , ? ,?)',[
            user.name, user.email , user.password]
    );
}
}  