(function () {
    'use strict';

    // Toggle sidebar on Menu button click
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#body').toggleClass('active');
    });
})();


// Get the current year for the copyright
$('#year').text(new Date().getFullYear());


$(function () {
    $(document).ready(function () {
        $('#example').DataTable();
    });
});

// For WYSIWYG editor
CKEDITOR.replace('editor1');