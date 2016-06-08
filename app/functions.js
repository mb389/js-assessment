exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
     return fn.apply(null,arr);
  },

  speak: function(fn, obj) {
     return fn.call(obj);
  },

  functionFunction: function(str) {
     return function(str2) {
        return str+", "+str2;
     }
  },

  makeClosures: function(arr, fn) {
     var out = [];

     var newFn = function(val) {
        return function() { return fn(val) }
     }

     arr.forEach(function(el) {
        out.push(newFn(el))
     })

     return out;
  },

  partial: function(fn, str1, str2) {
     return function(str3) {
        return fn(str1,str2,str3)
     }
  },

  useArguments: function() {
    return [].reduce.call(arguments,function(a,b) { return a + b })
  },

  callIt: function(fn) {
     var args = [].slice.call(arguments,1);
     return fn.apply(null,args)
  },

  partialUsingArguments: function(fn) {
     var args = [].slice.call(arguments,1);
     return function() {
        var innerArgs = [].slice.call(arguments);
        return fn.apply(null,args.concat(innerArgs))
     }
  },

  curryIt: function(fn) {

      function curryArgs(allArgs,argCount) {
         return function(arg) {
            allArgs.push(arg)
            return allArgs.length === argCount ? fn.apply(null,allArgs) : curryArgs(allArgs,argCount);
         }
      }

      return curryArgs([],fn.length)
  }
};
