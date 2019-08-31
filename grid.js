

  let data1 = [35, 24, 68, 87, 47]; // Test data
  let element1 = $('body');        // Test element (body tag);
  let options1 = {                // Test options
    
    // CHART SIZE (pixels) \\
    width: 500,  // Automatically converts to pixels - leave this so we can use the value in equations later
    height: 300,
  
    // GRID OPTIONS \\ 
    axisMax: 100, 
    axisMin: 0,
    interval : 10,
    
    // BAR OPTIONS \\
    barSpacing: 20,
    barColor: ['orange', 'violet', 'blue', 'red', 'green'],
  
    // LABEL OPTIONS \\
    labelSize: 40,
    labelNames : ["Label1", "Label2", "Label3", "Label4", "Label5"],
  
    // COLOUR OPTIONS \\
    backgroundColor: '#0c7ba3',
    labelColor: 'white',
  
   // TITLE OPTIONS \\
  
    title: undefined,
    titleSize: undefined,
    titleColor: undefined
  }


  $(document).ready( function() {

function makeGrid() {
  let grid = $('<div>');
  grid.appendTo(element1);
  $(grid).css({
    'height' : options.height,
    'width'  : options.width,
    'background-color' : options.backgroundColor,
    'display' : 'flex',
    'flex-direction' : 'column'
    })
    
    let steps = (options.axisMax - options.axisMin)/ options.interval;
    for (let i = 0; i < steps; i++) {
    let gridlines = $('<div>');
    $(gridlines).css({
      "height" : options.height / options.steps,
      'border-style' : 'dashed'
    })
    gridlines.appendTo(grid);
  }  
}

makeGrid();

  })