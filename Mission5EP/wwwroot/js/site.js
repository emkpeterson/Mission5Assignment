// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = parseFloat($('#hours').val());
        var rate = parseFloat($('#rate').val());

        // Check if the entered hours is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a positive number for hours.');
            return;
        }

        // Calculate total
        var total = hours * rate;

        // Display total
        $('#total').val(total.toFixed(2));
    });
});
