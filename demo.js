const prebooking = (bikename)=>{
    console.log(`Your ${bikename} is booked..`)
}

const orderstatus = (bikename)=>{
    console.log(`Your ${bikename} is delivered.`);
}
console.log("Bike is booked");

// prebooking("RTR 200CC");
module.exports = { prebooking, orderstatus };
