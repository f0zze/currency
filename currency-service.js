angular.module('currencyConverter').service('Currency', CurrencyService);

function CurrencyService($http) {

    return {
        getCurrency: getCurrency,
        getEuro:getEuro
    };

    function getCurrency() {
        return $http.get('https://api.fixer.io/latest');
    }

    function getEuro(euro,selectedValue) {
        return euro * selectedCurrency;
    }

}