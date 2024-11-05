const checkRole = (req,res,next)=>{
    const role = req.query.role;
    if(role === "teacher"){
        next();
    } else {
        //rechazamos la peticion
        res.status(401).send("No estas autorizado");
    }
}

module.exports = {checkRole};

//req params
//  GET:  back /users/:id  ===>  cliente /users/5
// return {...}
// con express req.params.id

//req queries params
// GET: back /users cliente /users?role=teacher   return return []
//con express req.query.role