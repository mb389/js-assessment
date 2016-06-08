exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
     return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
     constructor.prototype.greeting=greeting;
  },

  iterate: function(obj) {
     var ownArr = [];

     for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          ownArr.push(key+": "+obj[key])
       }
     }
     
     return ownArr;
  }
};
