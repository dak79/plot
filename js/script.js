var parameters = {
    target: '#myFunction',
    data: [{
        fn: 'sin(x)',
        color: 'red'
    }],
    grid: true,
    yAxis: { domain: [-1, 1] },
    xAxis: { domain: [0, 2 * Math.PI] }
};

function plot() {
    
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    var color = document.querySelector("#color").value;
    var f = document.querySelector("#function").value;
    var g = document.querySelector("#grid").checked;

    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;
    parameters.data[0].fn = f;
    parameters.grid = g;
    
    functionPlot(parameters);
}

