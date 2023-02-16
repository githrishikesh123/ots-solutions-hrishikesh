//  Get All Customers ---------------------------------------------------------------------
customerRoute.get("/", async (req, res) => {
    const customerList = await customerSchema.find();
    res.send(customerList);
  });