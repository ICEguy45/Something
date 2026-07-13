// const newUser = new Object() --This is a Singleton Object
const newUser = {}//This is a non-Singleton Object

newUser.id = "123abc"
newUser.name = "Joss"
newUser.isLoggedIn = false

// console.log(newUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sumanth",
      lastname: "Pasumarthi"
    }
  }
}

// console.log(regularUser.fullname?.userfullname?.firstname)

const object1 = {1:"a" , 2:"b"}
const object2 = {3:"a" , 4:"b"}
 
// const object3 = Object.assign({},object1,object2)
const object3 = {...object1,...object2}
// console.log(object3)
// console.log(newUser)
// console.log(Object.keys(newUser))
// console.log(Object.values(newUser))
// console.log(Object.entries(newUser))

// console.log(newUser.hasOwnProperty('isLoggedIn'))

const course = {
  coursename:"Js in Hindi",
  price:"999",
  courseInstructor: "Sumanth"
}
const {courseInstructor} = course

console.log(courseInstructor)