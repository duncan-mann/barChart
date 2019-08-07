let data1 = [1, 2, 3, 4, 5]; // Test data
let options1 = {             // Test options
  width: '500px',
  height: '500px',
  backgroundColor: 'blue',
  barColor: undefined,
  labelColor: undefined,
  barSpacing: undefined,
  barChartAxes: undefined,
  titleSize: undefined,
  titleColor: undefined
}

let element1 = $('body');  // Test element (body tag);


$(document).ready( function() {

      function barChart(data, options, element) {
  let $chartArea = $('<div>');                              //Created div to contain bar chart
  $chartArea.prependTo(element).attr("id", "barChart");   //Adds this div to the top of the body tag
  $('#barChart').css({
    "display": "flex",                      // Use flexbox later to organize bars within chart
    "flex-direction": "row",
    "align-items" : "flex-end",                      
    "width" : options.width,               // Adds CSS class width from options object
    "height": options.height,             // Adds CSS class height from options object
    "background-color": options.backgroundColor,  // Adds CSS class background-color from options object
      });

      
          
        };
        barChart(data1, options1, element1);
    })


    

