function highAndLow(numbers) {
    return `${Math.max.apply(Math, numbers.split(' '))} ${Math.min.apply(Math, numbers.split(' '))}` 
}