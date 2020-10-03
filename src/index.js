
exports.min = function min (array) {
        if (array == undefined) {return 0} else if (array.length == 0) { return 0} else { 
        let a = array[0];
         for (let i = 1; i < array.length; i++) {
             if (a > array[i]) {a = array[i]}}
             return a;}
             }
     
exports.max = function max (array) {
   if (array == undefined) {return 0} else if (array.length == 0) { return 0} else {
    let a = array[0];
    for (let i = 1; i < array.length; i++) {
             if (a < array[i]) {a = array[i]}}
             return a;}
    }

exports.avg = function avg (array) {
    if (array == undefined) {return 0} else if (array.length == 0) { return 0} else {
    let a = 0;
      for (let i = 0; i < array.length; i++) {
                a = a + array[i];}
                     return a / array.length;}
                    }


