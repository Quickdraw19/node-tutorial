// CommonJS, every file is a module (by default)
// Modules - encapsulated code (only share minimum)

const sayHi = require('./5-utils')

const names = require('./4-names')
 //This method returns undefined for names not included in 4-names export.
 sayHi("Guest")
 sayHi(names.larry)
 sayHi(names.thomas)
 sayHi(names.secret)

//const {larry, jacob} = require('./4-names')
// This method returns error for names not being destructured.
// sayHi(larry)
// sayHi(jacob)
//sayHi(thomas)
//sayHi(secret)

//const data = require('./6-alternative-export')
// console.log(data)
// sayHi(data.singlePerson.name)

require('./7-mind-grenade')