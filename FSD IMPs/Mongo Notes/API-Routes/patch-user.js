//  Edit Customer -------------------------------------------------------------------------

customerRoute.patch('/settings/edit/:id' , async (req,res)=>{
    const {id} = req.params;
    const result = await customerSchema.findById(id)
    result.firstName = req.body.firstName,
    result.lastName = req.body.lastName,
    result.email = req.body.email,
    result.phoneNumber = req.body.phoneNumber
    
    await result.save()
    console.log(`Edited Customer of Id ${id}`)
    res.send(result)
  })