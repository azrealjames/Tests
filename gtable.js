// edit 'key' to connect your spreadsheet
var key = "https://docs.google.com/spreadsheets/d/193O02HNKF_u8iQnbpTDElohhz16jUi9xi7mpxip09JQ/edit?usp=sharing";
// "data" refers to the column name with no spaces and no capitals
// punctuation or numbers in your column name
// "title" is the column name you want to appear in the published table
var columns = [{
 "data": "Resource",
 "title": "Resource"
}, {
 "data": "ResourceType",
 "title": "Resource Type"
}, {
 "data": "Description",
 "title": "Description"
}, {
 "data": "Link",
 "title": "Web Address"
}];

//Initialize the DataTable object and put settings in
$("#resourceTable").DataTable({
 ...
 //uncomment these options to simplify your table
 //"paging": false,
 //"searching": false,
 //"info": false
});

$('#resourceTable').html('<table cellpadding="0" cellspacing="0" border="0" class="table table-condensed table-bordered	table-striped table-hover" id="mySelection"></table>');


// end of writeTable