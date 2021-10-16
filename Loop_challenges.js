// Print odds 1-20

function printOdd (){
    for(var i = 1; i < 20; i = i +2){
        console.log(i);
    }
}
printOdd();


// Decreasing Multiples of 3

function print3 (){
    for(var i = 100; i >= 0; i = i - 1){
        if( i % 3 == 0)
        console.log(i);
    }
}
print3();

// Print the sequence

function printSeq (arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
printSeq([4, 2.5, 1, -0.5, -2, -3.5]);

// Sigma

function printSig (){
    var sum = 0;
    for(var i = 1; i <= 100; i++){
        sum= sum + i
    }console.log(sum);
}
printSig();


// Factorial
function printFac (){
    var sum = 1;
    for(var i = 1; i <= 12; i++){
        sum= sum * i
    }console.log(sum);
}
printFac();


