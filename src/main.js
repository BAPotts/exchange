import { getExchange } from './exchange-service';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";


async function getConversionRates() {
  const apiResponse = await getExchange();
  if(!apiResponse) {
    $(".result").html('<p>Something Went Wrong!/<p>');
  } else {
    $(".result").html(apiResponse.conversion_rates.USD);
  }
}

//function convertCurrency(userDollars, selectedCurrency, conversionRates) {

//}

$(document).ready(function() {
  $('#exchange-btn').click(function(event) {
    event.preventDefault();
    //const userDollars = parseInt($('#user-input').val());
    //const selectedCurrency = $("#select-currency").val();
    const conversionRates = getConversionRates();
    alert(conversionRates);
    
   // convertCurrency(userDollars, selectedCurrency, conversionRates);
  });
});