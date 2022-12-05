const root = ReactDOM.createRoot(document.getElementById("root"));
let yearsOld = prompt("Enter your age")
yearsRemain = 18 - yearsOld;
const adult = React.createElement("h3",null,"You are an adult")
const notAdult = React.createElement("h3",null,`You are not adult. You'll be adult after ${yearsRemain}`)
root.render(yearsOld>=18?adult:notAdult);