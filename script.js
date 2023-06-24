$(document).ready(function() {
	$.ajax({
	  url: "https://global-warming.org/api/arctic-api",
	  dataType: "json",
	  success: function(data) {
		var table = "<table><thead><tr><th>Year</th><th>Extent (million sq km)</th><th>Area (million sq km)</th></tr></thead><tbody>";
		$.each(data.arcticData, function(index, value) {
		  table += "<tr><td>" + value.year + "</td><td>" + value.extent + "</td><td>" + value.area + "</td></tr>";
		});
		table += "</tbody></table>";
		$("#data").html(table);
	  }
	});
  });
  