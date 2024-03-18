module.exports = function (cars){
    let sumMake = {}

    cars.forEach((car) =>{
        const make = car.make;
        const price = car.price

        console.log(make, price)
        if(sumMake[make]){
            sumMake[make] += price;
        }else{
            sumMake[make] = price
        }
    })
    console.log(sumMake)
    return sumMake
}