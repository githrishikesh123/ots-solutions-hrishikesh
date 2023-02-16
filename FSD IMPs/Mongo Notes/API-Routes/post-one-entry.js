// Add New Customer  ---------------------------------------------------------------------
customerRoute.post("/add", async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    let result = await customerSchema(req.body);
    result.save();
    console.log("Added One Customer", result);
    res.send(result);
  });