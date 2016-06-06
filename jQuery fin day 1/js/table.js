//$("#listTable tbody tr:gt(5)").addClass("alert");
//$("#listTable tbody tr:contains(BEAUPIERRE)").addClass("alert");

$("h1").addClass("alert").appendTo("main");



var element = document.getElementById("nav-site");
$(element).addClass("alert");



$( (function (){
	var table = document.createElement("table");
	var caption = document.createElement("caption");
	var tbody = document.createElement("tbody");
	for(var i=0 ; i < 20; i++ ){
		var row = document.createElement("tr");
		row.innerHTML= "<td>BACKWICKEL</td><td>Pauline</td><td>12/10/1959</td>"
		tbody.appendChild(row);
	}
	table.appendChild(caption);
	table.appendChild(tbody);

	return table;
})() ).addClass("alert").appendTo("main");


$("ul:eq(2)");
$("ul").eq(2);


$(fct).find("tr").gt(3);
$(element)

$("table tr:gt(3)");














