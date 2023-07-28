var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        ajax: {
            "url": "/Admin/Product/GetAll"
        },
        "columns": [
            {"data": "title", "width": "33%"},
            {"data": "price", "width": "33"},
            {"data": "category.name", "width": "33%"},
        ]
    });
}