'use strict'; // strict mode, proba uzycia niezadeklarowanych zmiennych zakonczy sie bledem

describe('calculator module test', function(){

    it('should add two numbers', function(){ 
        //given
        var a = 1, b = 2, result; 

        //when
            result = calculator.add(a,b);
        //then
        expect(result).toBe(3);

    });

     it('should substrate two numbers', function(){ 
        //given
        var a = 3, b = 2, result; 

        //when
            result = calculator.sub(a,b);
        //then
        expect(result).toBe(1);

    });

     it('should multiplicate two numbers', function(){ 
        //given
        var a = 3, b = 2, result; 

        //when
            result = calculator.mul(a,b);
        //then
        expect(result).toBe(6);

    });

     it('should devide two numbers', function(){ 
        //given
        var a = 6, b = 2, result; 

        //when
            result = calculator.div(a,b);
        //then
        expect(result).toBe(3);

    });

    it('should throw exception when deviding is by 0', function(){ 
        //given
        var a = 4, b = 0, result; 
        
        //when
           
        //then
        
        expect( function(){ calculator.div(a, b); } ).toThrow(new Error('deviding with zero not permitted.'));

    });

    it('should facorial number', function(){ 
        //given
        var a = 3, result; 

        //when
            result = calculator.factorial(a);
        //then
        expect(result).toBe(6);

    });

    it('should facorial number 0', function(){ 
        //given
        var a = 0, result; 

        //when
            result = calculator.factorial(a);
        //then
        expect(result).toBe(1);

    });

     it('should throw exception when facorial number is 0', function(){ 
        //given
        var a = -1, result; 
        
        //when
           
        //then
        
        expect( function(){ calculator.factorial(a); } ).toThrow(new Error('Negative parameter error. Input variable should be none negative number. '));

    });


});