$(document).ready(function() {
  var quote;
  var author;
  function getNewQuote() {
    // In this function I use jQuery method AJAX to make an API request
    $.ajax({
      // First we need an URL
      url: 'http://api.forismatic.com/api/1.0/?',
      // We might use just this whithout data obj url:'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en'
      // To don't have acces problems JSONP is a method commonly used to bypass the cross-domain policies in web browsers
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      }, 
      // We need another obj successful response is it a callback
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#text').text(quote);
        if(author) {
          $('#author').text('- ' + author);
        } else {
          $('#author').text(unknown);
        }
        
      }
    });
  }
  getNewQuote();
  
  $('#getQuotes').on('click', function(event) {
    // I added event.prev... to don't make the jumping of the page
    event.preventDefault();
    getNewQuote();    
  });

  $('#shareQuote').on('click', function(event) {
    event.preventDefault();
    // window is obj in the browser 
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });
});