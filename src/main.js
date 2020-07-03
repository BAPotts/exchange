import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeService } from './exchange-service';


$(document).ready(function() {
  $('#exchange-btn').click(function(event) {
    event.preventDefault();
    
    // const userDollars = parseInt($('#user-input').val());
    //const selectedCurrency = $("#select-currency").val();

    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getJsonObject();
      if(!response) {
        $(".result").html('<h1>There has been an error processing your request</h1>');
      } else {
        getElements(response);
      }
    })();

    function getElements(response) {
      $('.result').text(`The exchange rate is: ${response.conversion_rates.AED}`);
    }
  });
});