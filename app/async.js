exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
     return new Promise(function(resolve,reject) {
        if (value) resolve(value)
        else reject()
     })
  },

  manipulateRemoteData: function(url) {
     return new Promise(function(resolve,reject){
        $.ajax(url)
        .then(function(result) {
          var pplArr = result.people.map(function(person) {
             return person.name;
          }).sort();
          resolve(pplArr);
       })
     })

  }
};
