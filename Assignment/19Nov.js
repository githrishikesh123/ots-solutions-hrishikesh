// ================================ 1 =======================
// ===== Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) =============
/*
Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding : https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en. Use the fetch API and promises to get the data.
3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Noida.'
*/
/*
Note: We have geoLocation method for getting the current coordinates:
https://www.w3schools.com/jsref/prop_nav_geolocation.asp
*/

const whereAmI = async (lat,long) => {
    try {
      const data = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`);
      const myData = await data.json();
      console.log(`response from lat and long`, myData);
      console.log(`You Are In ${myData.city}`);
    } catch (err) {
      console.log(err, "Error Occured...");
    }
  };
  whereAmI(29.94569,78.164246);


//   --------------------------------- .then -------------------


/*
  const whereAmI2 = (lat,long) => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        console.log(`You Are In ${result.city}`)
      })
      .catch((error) => console.log(error, "Error occured"));
  };
  whereAmI2(11.016010,76.970306);

  */



//   ======================= 2 ======================
//=======================  Get req ========================

/*
const getData = async () => {
  await axios.get("https://reqres.in/api/users").then((res) => {
    
    console.log(res.data);
    let user = res.data;
    console.log(user.data[3])
  });
};
getData();
*/



// ============ POST req , Add New User in (https://reqres.in/api/users) ================

// const myData = ()=>{
//     axios.post(`https://reqres.in/api/users`,
//     {
//             name: "morpet",
//             job: "leader"
//     },
//    {
//     header: {
//         'content-type': 'application/json'
//       }
//    }
//     ).then(res=>console.log(res,"RESP!!!")).catch((err)=>{
//         console.log(err.message,"Error!!!!!")
//     })
// }
// myData()












//  https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en

// https://reqres.in/api/users













// =================== Raw Work ===============
// const getData = async () => {
//   try {
//     const data = await fetch(`https://reqres.in/api/users`);
//     const myData = await data.json();
//     console.log(myData);
//     // console.log(myData.data[2]);
//   } catch (err) {
//     console.log(err, "Error Occured...");
//   }
// };



