//  Find By Id ---------------------------------------------------------------------
customerRoute.get("/:id" , async(req,res)=>{
    const {id} = req.params;
    const findCustomer = await customerSchema.findById(id);
    console.log("customer" , findCustomer)
    res.send(findCustomer)
  })