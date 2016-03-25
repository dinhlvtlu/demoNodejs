/**
 * Created by THATFU on 3/24/2016.
 */
//dung de share file hoac 1 object
// module co the goi them cac module khac vao de su dung
//module.exports = {
//  something: 123,
//  sayHelloInEnglish: function(){
//      console.log("hello");
//  },
//    sayHelloInVN: function()
//    {
//        console.log("Chao");
//    }
//
//};
module.exports = {
    invert:function(str){
        var strInner = "";
        for(var i = str.length-1 ; i >= 0 ; i--)
        {
            strInner += str.charAt(i);
        }
        return strInner;
    },
    camelCase: function(str){
        var strInner =str.split(" ");
        for(var i = 0 ; i <strInner.length; i++)
        {
            var first = strInner[i].charAt(0).toLocaleUpperCase();
            var second = strInner[i].slice(1);
            strInner[i] = first + second;
        }
        return strInner.join(' ');

    },
    longestWord: function (str){
        var strInner = str.split(" ");
        var longest = strInner[0].length;
        var word =strInner[0];
        for(var i=1 ; i < strInner.length-1; i++)
        {
            if(strInner[i].length > longest)
            {
                word = strInner[i];
            }
        }
        return word;
    }
};