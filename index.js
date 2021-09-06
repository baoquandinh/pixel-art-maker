// Variable declaration
let canvas = $("#pixelCanvas");
let square = $("td");
var button = $("#sizePicker input[type=submit]");
var color = $("#colorPicker");

/*
FUNCTION DECLARATION
*/

// Clears the grid
function clearGrid() {
  console.log("Clearing the grid...");
  canvas.empty();
}

// Creates the grid
function makeGrid() {
  var height, width, row, column;
  height = $("#inputHeight").val();
  width = $("#inputWeight").val();
  row = "<tr></tr>";
  column = "<td></td>";

  // Checking input before making grid
  console.log("Checking input before making grid...");
  if (height <= 0 || height > 50 || width <= 0 || width > 50) {
    console.log("NOPE, try again");
    //alert.apply("Fail");
  } else {
    // Crates the row
    clearGrid();
    console.log("Making the grid...");
    for (var i = 1; i <= height; i++) {
      canvas.append(row);
      //console.log("Row: " + i);
      // Creates the column
      for (var j = 1; j <= width; j++) {
        $("tr:last").append(column);
        //console.log("Column: " + j);
      }
    }
  }
}

/*
EVENT LISTENERS
*/

// Changes color of square on click
canvas.on("click", "td", function () {
  // Will remove the color on the td if another color is already present
  if ($(this).css("background-color") != "rgba(0, 0, 0, 0)") {
    console.log("Removing color...");
    $(this).css("background-color", "rgba(0,0,0,0)");
  } else {
    $(this).css("background-color", color.val());
  }
});

// Listen to when the submit button is click
button.click(event, function () {
  makeGrid();
  event.preventDefault();
});
