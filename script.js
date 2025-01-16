$(document).ready(function() {
	$.ajax({
	  url: "https://global-warming.org/api/arctic-api",
	  method: "GET",
	  dataType: "json",
	  success: function(response) {
		if (response && response.arcticData && response.arcticData.data) {
		  var table = "<table border='1'><thead><tr><th>Year-Month</th><th>Extent (million sq km)</th><th>Anomaly</th><th>Monthly Mean</th></tr></thead><tbody>";
		  
		  // Loop through key-value pairs in the data
		  $.each(response.arcticData.data, function(date, values) {
			table += "<tr><td>" + date + "</td><td>" + values.value + 
					 "</td><td>" + values.anom + "</td><td>" + values.monthlyMean + "</td></tr>";
		  });
  
		  table += "</tbody></table>";
		  $("#data").html(table);
		} else {
		  $("#data").html("<p>No data available.</p>");
		}
	  },
	  error: function() {
		$("#data").html("<p>Failed to fetch data. Please try again later.</p>");
	  }
	});
  });
  