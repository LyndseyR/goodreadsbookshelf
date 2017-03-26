/////////////////////////
// Hamburger Menu //////
/////////////////////////

$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.hamburger-menu').slideToggle();
  });
});


/////////////////////////
// Main Reading Read////
/////////////////////////

// Read Books Section

$(function () {
  var source = $("#read").html();
  var template = Handlebars.compile(source);

  var context = {
    books: [{
      title: 'Harry Potter',
      author: 'Rowling, JK',
      cover: 'harry-potter',
      rating: '4.74',
      stars: 'star5',
    },{
      title: 'When Christ and His Saints Slept',
      author: 'Penman, Sharon',
      cover: 'christ-saints-slept',
      rating: '4.24',
      stars: 'star5',
    },{
      title: 'The Sparrow',
      author: 'Russell, Mary',
      cover: 'sparrow',
      rating: '3.92',
      stars: 'star4',
    },{
      title: 'Grapes of Wrath',
      author: 'Steinback, John',
      cover: 'grapes-of-wrath',
      rating: '3.92',
      stars: 'star4',
    },{
      title: 'The Book Thief',
      author: 'Zusak, Markus',
      cover: 'book-thief',
      rating: '4.36',
      stars: 'star5',
    },{
      title: 'A Hope More Powerful Than the Sea',
      author: 'Fleming, Melissa',
      cover: 'hope-powerful-sea',
      rating: '4.42',
      stars: 'star5',
    },{
      title: 'Here Be Dragons',
      author: 'Penman, Sharon',
      cover: 'here-be-dragons',
      rating: '4.24',
      stars: 'star5',
    },{
      title: 'The Cuckoos Calling',
      author: 'Galbraith, Robert',
      cover: 'cuckoos-calling',
      rating: '3.83',
      stars: 'star3',
    }]
  };
  var compiled = template(context);
  $('.books').append(compiled);
});

// Currently reading

$(function () {
  var source = $("#currently-reading").html();
  var template = Handlebars.compile(source);

  var context = {
    books: [{
      title: 'Les Miserables',
      author: 'Hugo Victor',
      cover: 'les-miserables',
      rating: '4.14',
      stars: 'rate',
    },{
      title: 'Calvin and Hobbes',
      author: 'Watterson, Bill',
      cover: 'calvin-hobbes',
      rating: '4.61',
      stars: 'rate',
    }]
  };
  var compiled = template(context);
  $('.current-books').append(compiled);
});

// To Read

$(function () {
  var source = $("#to-read").html();
  var template = Handlebars.compile(source);

  var context = {
    books: [{
      title: 'Adulthood is a Myth',
      author: 'Andersen, Sarah',
      cover: 'adulthood',
      rating: '4.13',
      stars: 'rate',
    },{
      title: 'The Power of One',
      author: 'Courtenay, Bryce',
      cover: 'power-one',
      rating: '4.34',
      stars: 'rate',
    },{
      title: 'Rumors of War',
      author: 'Hughes, Dean',
      cover: 'rumors-war',
      rating: '4.25',
      stars: 'rate',
    },{
      title: 'Hamilton',
      author: 'Miranda, Manuel',
      cover: 'hamilton',
      rating: '4.45',
      stars: 'rate',
    }]
  };
  var compiled = template(context);
  $('.to-read-books').append(compiled);
});

// Add All Read show Currently Reading

$(document).ready(function(){
  $('.currently').click(function(){
    $('.books').hide();
    $('.to-read-books').hide();
    $('.current-books').show();
  });
  $('.read').click(function(){
    $('.current-books').hide();
    $('.to-read-books').hide();
    $('.books').show();
  });
  $('.to-read').click(function(){
    $('.current-books, .books').hide();
    $('.to-read-books').show();
  })
});
