//variables
var serNo= $("#serialNumber");
var item = $("#itemInput");
var	category = $("#catInput");
var location = $("#locationInput");
var shelf = $("#shelfInput");
var weight = $("#weightInput");
var price = $("#priceInput");
var qty = $("#qtyInput");
var setMin = $("#setInput");
  
   

var url = window.location.search;
var tableLine;
//var userId;

// Sets a flag for whether or not we're updating a post to be false initially
var update = false; 

function submitTable(table) {
  $.post("/kitchenA/New", trip, function() {
    window.location.href = "/kitchenA";
  });
}

function updateTable(table) {
    $.ajax({
      method: "PUT",
      url: "/KitchenA",
      data: table
    })
    .done(function() {
      window.location.href = "/kitchenA";
    });
  }
  
$("#submit-btn").on("submit", function(event) {
	event.preventDefault();
  // validation for value and to trim extra space
  if (!serNo.val().trim() || !item.val().trim() || !category.val().trim() 
     || !location.val().trim() || !shelf.val().trim() || !weight.val().trim()
     || !price.val().trim() || !qty.val().trim() || !setMin.val().trim()) {
    
   return;
	}
	// Create A New Post object to send to the database
	var newTableLine = {
	  serNo: serNo
	    .val()
	    .trim(),
	  item: item
	    .val()
	    .trim(),
	  category: category
	  	.val()
	  	.trim(),
	  location: location
	  	.val()
	  	.trim()
    shelf: shelf
	  	.val()
	  	.trim(),
    weight: weight
	  	.val()
	  	.trim(),
    price: price
	  	.val()
	  	.trim(),
    qty: qty
	  	.val()
	  	.trim(),
    setMin: set
	  	.val()
	  	.trim(),
	};

	// If we're updating a post run updatePost to update a post
	// Otherwise run submitPost to create a whole new post
	if (update) {
	  newTableLine.id = tableLine;
	  updateTable(newTableLine);
	}
	else {
	  submitTable(newTableLine);
	}
}
console.log(newTableLine());
console.log(newTable);

