// Delete Customer  ------------------------------------------------------------
customerRoute.delete('/delete/:id' , async(req,res)=>{
    const {id} = req.params;
    const result = await customerSchema.deleteOne({_id:id})
    console.log(`Deleted Customer of Id ${id}`)
    res.send(result)
  })
  