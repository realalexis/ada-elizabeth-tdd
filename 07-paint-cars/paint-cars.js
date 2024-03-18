module.exports = function (cars, color){
    const repaintedCars = [...cars];
    repaintedCars[0] = {...repaintedCars[0], colour :color }
    return repaintedCars
}