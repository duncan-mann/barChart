let data1 = [3, 6, 4, 1, 2]; // Test data
let options1 = {             // Test options
  width: 500,  // Automatically converts to pixels - leave this so we can use the value in equations later
  height: 500,
  backgroundColor: 'blue',
  barColor: 'red',
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
      
      for(let i =0; i < data.length; i++) {  // Looping to create every bar in bar chart
        let bar = $('<div>');               // Create div which will act as the bar
        bar.appendTo($chartArea).attr("id", "bar" + i.toString()); // Give each bar a css id named bar + index , i.e #bar0, #bar1, #bar2 etc.
        $('#bar' + i.toString()).css({
          "allign-self": "flex-end",      // Alligns each bar to the bottom of the container
          "height" : data[i]*20,          // 
          "width" : options.width / data.length,
          "background-color": options.barColor,
        })     
      }
        };
        barChart(data1, options1, element1);
    })


    

