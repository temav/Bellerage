let number = function(busStops) {
    let res = 0;
    for (let k of busStops) {
        res += (k[0]-k[1]);
    }
    return res;
}