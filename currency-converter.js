(function () {
    'use strict';

    angular.module('currencyConverter', []).directive('currencyConverter', CurrencyConverter);

    function CurrencyConverter() {
        return {
            restrict: 'E',
            templateUrl: 'currency-converter-tpl.html',
            scope: {},
            controller: CurrencyConverterCtrl,
            controllerAs: 'cConverterCtrl'
        };

        function CurrencyConverterCtrl(Currency) {
            let vm = this;

            vm.selectedCurrency = 0;
            vm.result = 0;
            vm.euro = 0;

            vm.convert = convert;
            vm.euroChanged = euroChanged;


            Currency.getCurrency().then((response) => {
                let data = response.data.rates;
                let result = [];

                for (let key in data) {
                    result.push({
                        'name': key,
                        'value': data[key]
                    })
                }

                vm.rates = result;
            });

            function convert() {
                updateResult();
            }

            function euroChanged() {
                updateResult();
            }


            function updateResult() {
                if ( angular.isNumber(Number(vm.euro))) {
                    vm.result = Currency.getEuro(vm.euro, vm.selectedCurrency);
                }
            }

        }
    }

})();
