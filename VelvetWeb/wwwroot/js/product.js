﻿var dataTable;

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
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="w-75 btn-group" role="group">
                            <a href="/Admin/Product/Upsert?id=${data}"
                               class="btn btn-primary mx-2"> <i class="bi bi-pencil-square"></i> Edit</a>
                            <a 
                               class="btn btn-danger mx-2"> <i class="bi bi-trash-fill"></i> Delete</a>
                        </div>
                    `
                },
                "width": "33%"
            },
        ]
    });
}