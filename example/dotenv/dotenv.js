
// try to get default env param
console.log(process.env.HOMEDRIVE); // C:

// try to get PET_STORE_API from `.env` without dotenv
console.log(process.env.PET_STORE_API); // undefined

// try to get PET_STORE_API from `.env` with dotenv
require('dotenv').config()
console.log(process.env.PET_STORE_API);
