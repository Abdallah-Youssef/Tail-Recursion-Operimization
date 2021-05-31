var nodeplotlib = require("nodeplotlib");
var tail_fib = require("./tail");
var head_fib = require("./head");
// fib sequence :
//   i    =  1 2 3 4 5 6  7
// fib(i) =  1 1 3 5 8 13 21
var n_points = 35;
var x = [];
var tail_res = [];
var head_res = [];
for (var i = 1; i <= n_points; i++) {
    x.push(i);
    measure_and_push(tail_fib, i, tail_res);
    measure_and_push(head_fib, i, head_res);
}
function measure_and_push(fib, n, res) {
    var t = process.hrtime();
    fib(n);
    res.push(process.hrtime(t)[1] / (1e3)); // divide by 1e6 to get microsceonds from nanoseconds
}

var tail_plot = [{
    x: x,
    y: tail_res,
    type: 'scatter'
}];


var head_plot = [{
        x: x,
        y: head_res,
        type: 'scatter'
    }];


nodeplotlib.stack(tail_plot);
nodeplotlib.stack(head_plot);
nodeplotlib.plot();

