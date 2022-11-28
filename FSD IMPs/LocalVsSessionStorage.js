

// The localStorage and sessionStorage objects, part of the web storage API, are two great tools for saving key/value pairs locally. 
// Using localStorage and sessionStorage for storage is an alternative to using cookies.

// Creating, Reading, and Updating Entries ======>
            //You can create entries for the localStorage object by using the setItem() method. 
            //The setItem() method takes two arguments, the key and corresponding value:


            let key = 'Item 1';
            localStorage.setItem(key, 'Value');

            //This code sets myItem equal to 'Value', which is the corresponding value for key.

            //Updating an entry is done with the setItem() method. Again, it takes two arguments.
            //The key argument will be an existing key while the value argument will be a new value: