const user = {
  username: "hitesth",
  price: 200
}

function handleObject(anyobject){
  console.log(`The username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
  username:"Sam",
  price: 399
})