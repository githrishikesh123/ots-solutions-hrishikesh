const getAllProjects = (req,res)=>{
    res.send("<h2> Getting All Projects</h2>")
}

const getProject = (req,res)=>{
    req.params.id
    res.send(`<h2>getting a project:</h2> ${req.params.id}`)
}

const createProject = (req,res)=>{
    req.params.name;
    res.send(`created project :  ${req.params.name}`)
}

export {
    getAllProjects,
    getProject,
    createProject
}