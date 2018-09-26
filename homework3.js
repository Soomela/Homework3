//Ex1
const a = function exOne(a1, a2, a3) {
    a4 = a1 + a2 - a3  ;            // operations
	return a4;					   //retruns the operation
}
console.log(a(1,2,3));

//Ex2
const a = function exTwo() {
    return 0;              // returns 0
}
console.log(a());

//Ex3
const a = function exThree(b) {	//does something but doesn't return
    boom = b + 1;   		// an operation
	console.log(boom); 	// display bOper
}
console.log(a());

//Ex4
const example4 = function (str1, str2, str3) {
  if (str1.length > str2.length && str1.length > str3.length) {
    return str1;
  } else if (str2.length > str3.length && str.length2 > str1.length){
    return str2;
  } else {
    return str3;
  }
};
console.log(example4('duxov', 'joy', 'energy'));



//Ex5
const a = function exFive(x, y) {	
    if(x === y) {	//if equal returning 0
		return 0;
	}
	else if (x > y) { //if x is larger returning 1	
		return 1;
	}
	else {    // otherwise (y is larger) returning -1
		return -1;
	}
}
console.log(a(2, 5));

//Ex6
const a = function exSix(first, second) {		
    mult = first * second;   		// multiply
	return mult; 					// returning result
};
console.log(a(2, 5));

//Ex7
const a = function exSeven(firstD, secondD) {
    divide = firstD / secondD;   		// divide
	return divide; 						// returning result
}
console.log(a(2, 5));

//Ex8
const a = function exSix(first, second) {		
    return first * second;

};

const b = function exSeven(firstD, secondD) {
    return firstD / secondD;
};
console.log(b(a(2,6),2));

//Ex9
const numLength = function (a) {  		
const z = ''+a; //'a'
return z;						
};
console.log(numLength.length);


//Ex10
function exTen(str01, str02, num) {
    if((str01.length + str02.length) > num) {
		return 1;
	} else {
		return -1;
	}
}

// console.log(exTen("hello", "world", 3)); // Should return 1 

//Ex11
function runStuff(strin, fnum, snum) {
    if(strin === "rectangle") {
		return fnum * snum;
	} else if(strin === "triangle") {
		return (fnum * snum) / 2;
	} else {
		return -1;
	}
}
