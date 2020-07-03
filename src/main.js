import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeService } from './exchange-service';


$(document).ready(function() {
  $('#exchange-btn').click(function(event) {
    event.preventDefault();
    
    // const userDollars = parseInt($('#user-input').val());
    const selectedCurrency = $("#select-currency").val();

    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getJsonObject();
      if(!response) {
        $(".result").html('<h1>There has been an error processing your request</h1>');
      } else {
        getElements(selectedCurrency);
      }
    })();

    function getElements(selectedCurrency) {
     let currencyArray = ['AED', 'ARS', 'AUD', 'BGN', 'BRL'];
     for (let i = 0; i < currencyArray.length; i++){
       if (selectedCurrency === currencyArray[i]) {
         alert(selectedCurrency);
       } else {
         alert("NOPE");
       }  
      }
    }
  });
});