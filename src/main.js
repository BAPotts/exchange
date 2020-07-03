import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";



$(document).ready(function() {
  $('#exchange-btn').click(function(event) {
    event.preventDefault();
    
    const userDollars = parseInt($('#user-input').val());
    const selectedCurrency = $("#select-currency").val();

    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getJsonObject();
      if(!response) {
        $(".result").html('<h1>There has been an error processing your request</h1>')
      } else {
        getElements(response);
      }
    })();

    function getElements(response) {
      if (response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }
  })
})