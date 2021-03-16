// Assign the data from `data.js` to a descriptive variable
showTable(data);

d3.select('button').on('click', handleClick);

// console.log(alien);

// Select the button
//var button = d3.select("#filter-btn");

// Select the form
//var form = d3.select("#form");

// Create event handlers 
//button.on("click", enterdate);
//form.on("submit",enterdate);

//data.forEach(function(alien_table) {
   //console.log(weatherReport);

function showTable(data){
  d3.select('tbody').html('');
  data.forEach(obj => {
    var row = d3.select('tbody').append("tr");
    Object.values(obj).forEach(val => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
};


// Complete the event handler function for the form
function handleClick() {
  var filterdata= data;
  var value = d3.select('input').property('value');
  if (value){
    filterdata= filterdata.filter(obj => obj.datetime == value);
  };
  d3.select('input').property('value', '');
  showTable(filterdata);
};
  // //tbody.html("");
  // // Prevent the page from refreshing
  // d3.event.preventDefault();
  
  // // Select the input element and get the raw HTML node
  // var inputElement = d3.select("#datetime");

  // // Get the value property of the input element
  // var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(alien);

  // var filteredData = alien.filter(alien => alien.datetime === inputValue);

  // console.log(filteredData);
  
  
  // alien.forEach(enterdate => {
    
  //   var row = tbody.append("tr");
  //   Object.entries(enterdate).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
      
  //   });
    
  // });
  


  // First, create an array with just the age values


  


