//blocking code

console.log("Order is placed...")
console.log("Order is on the way...")

//non blocking

setTimeout(() => {
    console.log("Order is rejected...")
}, 2000);
console.log("Order is successfully delivered...")

let orderstatus = (status)=>{
    console.log(`Order Status : ${status}`)
}

orderstatus("Cancelled...")