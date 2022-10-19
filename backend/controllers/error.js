exports.get404 = (req, res, next)=>{


const eror = new Error ('Not Found.');
error.stausCode = 404;
next(error);

}
exports.get500 = (error, req, res, next)=>{
    const data = error.data;
    res.status(error.stausCode || 500);
    res.json({
        error:{
            messege :error.messege,
            data:data,
        }
    });
    };