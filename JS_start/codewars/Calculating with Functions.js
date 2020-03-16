function num(a, number) {
    if(a == null) {
        return number;
    }
    else {
        return a[1](number,a[0]);
    }
}
function zero (a) {
    return num(a, 0);
}
function one(a) {
    return num(a, 1);
}
function two(a) { 
    return num(a, 2);
}
function three(a) {
    return num(a, 3);
}
function four(a) {
    return num(a, 4);
}
function five(a) {
    return num(a, 5);
}
function six(a) {
    return num(a, 6);
}
function seven(a) {
    return num(a, 7);
}
function eight(a) {
    return num(a, 8);
}
function nine(a) {
    return num(a, 9);
}

function plus(a, b) {
    if(b == null) {
        return [a, plus];
    }
    else {
        return a+b;
    }
}
function minus(a, b) {
    if(b == null) {
        return [a, minus];
    }
    else {
        return a-b;
    }
}

function times(a, b) {
    if(b == null) {
        return [a, times];
    }
    else {
        return a*b;
    }
}
function dividedBy(a, b) {
    if(b == null) {
        return [a, dividedBy];
    }
    else {
        return Math.floor(a/b);
    }
}