import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";



$(document).ready(function() {
  $('#exchange-btn').click(function(event) {
    event.preventDefault();
    
    const userDollars = parseInt($('#user-input').val());
    const selectedCurrency = $("#select-currency").val();
  });
});