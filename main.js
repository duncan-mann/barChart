let data1 = [35, 24, 68, 87, 47]; // Test data
let element1 = $('body');        // Test element (body tag);
let options1 = {                // Test options
  width: 500,  // Automatically converts to pixels - leave this so we can use the value in equations later
  height: 500,
  axisMax: 100, 
  axisMin: 0, 
  barSpacing: 20,
  labelSize: 40,
  labelNames : ["Label1", "Label2", "Label3", "Label4", "Label5"],
  backgroundColor: 'powderblue',
  barColor: 'maroon',
  labelColor: 'white',
  title: undefined,
  titleSize: undefined,
  titleColor: undefined
}

$(document).ready( function() {

      function barChart(data, options, element) {
 
        let $chartArea = $('<div>');  //Created div to contain bar chart
        let $labelArea = $('<div>'); // Created larger div to hold the chartArea div, which will also have labels for each axis, as well as the title

        $labelArea.prependTo(element).attr("id", "barChart");   //Adds this div to the top of the body tag
  $('#barChart').css({
    "display": "flex",                      // Use flexbox later to organize bars within chart
    // "flex-direction": "row",
    // "align-items" : "flex-end",                      
    "width" : 1.2*options.width,               // Adds CSS class width from options object
    "height": 1.1*options.height,             // Adds CSS class height from options object
    "background-color": options.backgroundColor,  // Adds CSS class background-color from options object
      });


  $chartArea.prependTo($labelArea).attr("id", "innerBarChart");   //Adds this div to the top of the body tag
  $('#innerBarChart').css({
    "display": "flex",                      // Use flexbox later to organize bars within chart
    "flex-direction": "row",
    "align-items" : "flex-end",                      
    "width" : options.width,               // Adds CSS class width from options object
    "height": options.height,             // Adds CSS class height from options object
    "background-color": options.backgroundColor,  // Adds CSS class background-color from options object
      });

      
    
      
        function makeBars() {
      for(let i =0; i < data.length; i++) {  // Looping to create every bar in bar chart
        let bar = $('<div>');               // Create div which will act as the bar
        bar.appendTo($chartArea).attr("id", "bar" + i.toString()); // Give each bar a css id named bar + index , i.e #bar0, #bar1, #bar2 etc.
        $('#bar' + i.toString()).css({     // Define CSS attributes for each class
          "allign-self": "flex-end",      // Alligns each bar to the bottom of the container
          "height" : data[i]*options.height/(options.axisMax - options.axisMin),        //Adds Y-axis functionality by including axisMax and axisMin, and adjusting the height of the bars to these values
          "width" : (options.width - (data.length - 1)*options.barSpacing) / data.length,  // Splits the width of each bar evenly amongst container width, considering the barSpacing value specified in options
          "margin-right" : options.barSpacing,   // Add barSpacing option to margins of each bar div
          "margin-left" : options.barSpacing,
          "background-color": options.barColor,  // Add barColor from options
          "border-radius": "10px 10px 0px 0px"
          })  
        }  

        //  function makeBarLabels() {
         

        //    }
         } 

      makeBars();
        };
        barChart(data1, options1, element1);
      })