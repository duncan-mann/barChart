let data1 = [15, 22, 76, 30, 97, 46, 65]; // Test data
let element1 = $('body');        // Test element (body tag);
let options1 = {                // Test options
  
  // CHART SIZE (pixels) \\
  width: 500,  // Automatically converts to pixels - leave this so we can use the value in equations later
  height: 400,

  // GRID OPTIONS \\ 
  axisMax: 100, 
  axisMin: 0,
  interval : 4,
  
  // BAR OPTIONS \\
  barSpacing: 20,
  barColor: ['orange', 'violet', 'blue', 'red', 'green', 'purple', 'gold'],

  // LABEL OPTIONS \\
  xLabelSize: 7,
  yLabelSize: 10,
  labelNames : ["Label1", "Label2", "Label3", "Label4", "Label5", "Label6", "Label7"],

  // COLOUR OPTIONS \\
  backgroundColor: 'grey',
  labelColor: 'white',

 // TITLE OPTIONS \\

  title: "Bar Chart",
  titleSize: 25,
  titleColor: "red",
  titleFont: undefined
}

$(document).ready( function() {

      function barChart(data, options, element) {
 
        
        let $labelArea = $('<div>'); // Created larger div to hold the chartArea div, which will also have labels for each axis, as well as the title
        let $chartArea = $('<div>');  //Created div to contain bar chart

        $labelArea.prependTo(element);   //Adds this div to the top of the body tag
  $($labelArea).css({
    "width" : 1.2*options.width,                      // Adds CSS class width from options object
    "height": (options.height/options.interval) + options.height,                     // Adds CSS class height from options object
    "display": "grid",                                // Use CSS grid to organize bar chart, labels, and title 
    "grid-template-rows" : ((options.height/options.interval)/2) + "px " + options.height + "px " + ((options.height/options.interval)/2) + "px",                          // The first row is sized to be half the size of the divs created later to contain y-axis labels. This insures that the labels always meet at the tick marks. The second row is the height of the bar chart contents, defined in the options. The third row is for the x-axis labels. 
    "grid-template-columns": (0.19/2)*options.width + "px " + (0.19/2)*options.width + "px " + 0.01*options.width + "px " + options.width + "px",      // Created columns 3 columns -  y axis values, tick marks, and bar chart contents  
    "background-color": options.backgroundColor,      // Adds CSS class background-color from options object
    "background-image": 'url(asfalt-light.png)'   
  });


  $chartArea.prependTo($labelArea).attr("id", "innerBarChart");   //Adds this div to the top of the body tag
  $('#innerBarChart').css({
    //CSS Grid Child properties
    "grid-column-start" : 4,                   
    "grid-column-end" : 5,
    "grid-row-start" : 2,
    "grid-row-end" : 3,
    // Flexbox Container properties
    "display": "flex",                      // Use flexbox later to organize bars within chart
    "flex-direction": "row",
    "align-items" : "flex-end",                      
    "width" : options.width,               // Adds CSS class width from options object
    "height": options.height,             // Adds CSS class height from options object
    "background-color": options.backgroundColor,
    "background-image": 'url(asfalt-light.png)'  
      });
    

      
    
      
        function makeBars() {
      for(let i =0; i < data.length; i++) {  // Looping to create every bar in bar chart
        let bar = $('<div>');               // Create div which will act as the bar
        bar.appendTo($chartArea).attr("id", "bar" + i.toString()); // Give each bar a css id named bar + index , i.e #bar0, #bar1, #bar2 etc.
        $('#bar' + i.toString()).css({     // Define CSS attributes for each class
          "allign-self": "flex-end",      //  Alligns each bar to the bottom of the container
          "height" : (data[i] - options.axisMin)*options.height/(options.axisMax - options.axisMin),        //Adds Y-axis functionality by including axisMax and axisMin, and adjusting the height of the bars to these values
          "width" : (options.width - (data.length - 1)*options.barSpacing) / data.length,  // Splits the width of each bar evenly amongst container width, considering the barSpacing value specified in options
          "margin-right" : options.barSpacing,   // Add barSpacing option to margins of each bar div
          "margin-left" : options.barSpacing,
          "background-color": options.barColor[i],  // Add barColor from options
          "border-radius": "10px 10px 0px 0px"
          })  
        }
      }  

        function displayBarValues() {
          for (let i=0; i < data.length; i++) {
            let barValueDiv = $('<div>');
            barValueDiv.appendTo('#bar' + i.toString()).attr("id", "barValue" + i.toString()); //Creates a div within each bar, and gives it a CSS id of barValue0. barValue1, etc.
            
          
            
            $(barValueDiv).css({
              "text-align" : "center"
            })
            let barValue = $('<p>');
            $(barValue).text(data[i]);
            $(barValue).css({
              "display" : "inline-block"
            })
            barValue.appendTo(barValueDiv);

            }
          }
          
        function makeTicks() {
          let ticksDiv = $('<div>'); 
          ticksDiv.appendTo($labelArea);
          $(ticksDiv).css({
            "grid-column-start" : 3,
            "grid-column-end" : 4,
            "grid-row-start" : 2,
            "grid-row-end" : 3,
            "display" : "flex",
            "flex-direction" : "column",
           
          });
          
          let intervalHeight = options.height/options.interval;
          for (let i = 0; i < options.interval; i++) {
            let ticks = $('<div>');
            if (i === 0) {
              $(ticks).css({
                "height" : intervalHeight,
                "border-top-style": "solid",   // Creates the top tick mark
                "border-right-style": "none",
                "border-bottom-style": "solid",
                "border-left-style": "none",
                "border-width" : "2px"
              })
            } else {
              $(ticks).css({
                "height" : intervalHeight,  // All other divs onlt have a bottom tick mark so that borders from adjacent divs don't overlap
                "border-top-style": "none",
                "border-right-style": "none",
                "border-bottom-style": "solid",
                "border-left-style": "none",
                "border-width" : "2px"
            })
            };
            ticks.appendTo(ticksDiv);
          }
        }

        function makeYAxisLabels() {  //Added 'makeYAxis function to this one instead, as the yAxis variable within that function couldnt be accesse din this one

          let yAxis = $('<div>')
          yAxis.appendTo($labelArea);
          $(yAxis).css({
            "grid-column-start" : 2,
            "grid-column-end" : 3,
            "grid-row-start" : 1,
            "grid-row-end" : 4,
            "display" : "flex",
            "flex-direction" : "column"
          });

          for (let i = 0; i <= options.interval; i++) {
            let yValue = $('<div>');
            $(yValue).css({
              "height" : options.height/options.interval,
              "text-align" : "right",
              "margin-right" : "4px"
            });
            
            let yNum = $('<p>');
            $(yNum).css({
              "display" : "inline-block",
              "font-size"  : options.yLabelSize,
              "font-style" : "italic"    ,
              "line-height" : options.height/options.interval + "px",
              "margin" : "0px"          
            });
            if (i === 0) {
              $(yNum).text(options.axisMin.toString());
            } else {
              $(yNum).text((options.axisMin + i*((options.axisMax - options.axisMin)/options.interval).toString()));
            }
            yNum.appendTo(yValue);
            yValue.prependTo(yAxis);
          }
        }
      
      function makeBarLabels() {
        let xAxis = $('<div>'); 

        xAxis.appendTo($labelArea).attr("id", "x-axis");  //Create div for individual bar labels to be contained
        $('#x-axis').css( {
          "grid-column-start" : 4,
          "grid-column-end" : 5,
          "grid-row-start" : 3,
          "grid-row-end" : 4,
          'display' : "flex",
          'height'  : ((options.height/options.interval)/2),
          'width' : options.width,                     // Set width of label div to the same width as the bar chart area
          'background-color' : options.backgroundColor,
          "background-image": 'url(asfalt-light.png)'
        });

          for (let i = 0; i < data.length; i++) {
            let label = $('<d>');
            $(label).css({
              "width" : (options.width - (data.length - 1)*options.barSpacing) / data.length,
              "margin-right" : options.barSpacing,   // Add barSpacing option to margins of each bar div
              "margin-left" : options.barSpacing,
              "text-align" : "center",
              "font-size"  : options.xLabelSize
            })
            label.appendTo(xAxis);
            let labelText = $('<p>');
            $(labelText).css({
              "display" : "inline-block"
            })
            $(labelText).text(options.labelNames[i]);
            labelText.appendTo(label);
            
          }
        }
      
      function makeTitle() {
        let titleDiv = $('<div>');
        titleDiv.appendTo($labelArea);
        $(titleDiv).css({
          "grid-column-start" : 2,
          "grid-column-end" : 5,
          "grid-row-start" : 1,
          "grid-row-end" : 2,
          "text-align" : "center",
          // "line-height" : ((options.height/options.interval)/2)
        });
        let title = $('<p>');
        title.appendTo(titleDiv);
        $(title).text(options.title);
        $(title).css({
          "font-size" : options.titleSize,
          "margin" : "3%"
        })
      }
      
    
      makeYAxisLabels();
      makeTicks();
      makeBars();
      displayBarValues();
      makeBarLabels();
      makeTitle();
        };
        barChart(data1, options1, element1);
      })