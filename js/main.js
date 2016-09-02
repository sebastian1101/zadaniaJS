'use strict'; // strict mode, proba uzycia niezadeklarowanych zmiennych zakonczy sie bledem
console.log('hello from main js. Sebastian Tomczyk');

var calculator = (function() {
    return {
        add: function(a, b) {
            return a + b;
        },
        sub: function(a, b) {
            return a - b;
        },
        div: function(a ,b) {
            if(b === 0) {
                throw new Error('deviding with zero not permitted.');
            }
            return a / b;
        },
        mul: function(a, b) {
            return a * b;
        },
        factorial: function(a) {
            if(a <0) {
                throw new Error('Negative parameter error. Input variable should be none negative number. ');
            }
            var i = 1;
            var n = 1;
            if (a === 0) {
                return 1;
            }
            for(i; i <= a; i++) {
                n = n*i;
            }
            return n;
        }
        
    }

})();
