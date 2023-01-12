const secondMiddleware=(req,res,next)=>{
    console.log('Middleware Validation Done Again');
    next()
}

module.exports=secondMiddleware;