var number = function(busStops){
  let passangers = [];
  
  for (let i = 0; i < busStops.length; i++) {
    passangers.push(busStops[i][0]-busStops[i][1])
  }
  
  return passangers.reduce((a,b) => a+b)
}