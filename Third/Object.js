// There are two ways of declaring a object as a literal and as a Constructor
// Singleton are created when we create a object with a constructor

// Literal method

const mySym = Symbol("key1")
const JsUser = {
  name:"Sumanth",
  age:20,
  [mySym]:"mykey1",
  "full name":"Sumanth Pasumarthi",
  location:"Hyderabad",
  email:"xyz@gmail.com",
  LoggedIn: false,
  LastLoggedInDays: ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser)

JsUser.greeting = function(){
  console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
  console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetingTwo())