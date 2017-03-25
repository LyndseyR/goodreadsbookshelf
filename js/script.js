/////////////////////////
// Hamburger Menu //////
/////////////////////////

$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.hamburger-menu').slideToggle();
  });
});

/////////////////////////
// Side Reading ////////
/////////////////////////

// $(function () {
//   var source = $("#side-bar-books").html();
//   var template = Handlebars.compile(source);
//
//   var context = {
//     books: [{
//       title: 'Harry Potter',
//       author: 'Rowling, JK',
//       cover: 'harry-potter',
//       rating: '4.74',
//       stars: 'star5',
//     },{
//       title: 'When Christ and His Saints Slept',
//       author: 'Steinback, John',
//       cover: 'christ-saints-slept',
//       rating: '4.24',
//       stars: 'star5',
//     },{
//       title: 'The Sparrow',
//       author: 'Russell, Mary',
//       cover: 'sparrow',
//       rating: '3.92',
//       stars: 'star4',
//     },{
//       title: 'When Christ and His Saints Slept',
//       author: 'Penman, Sharon',
//       cover: 'christ-saints-slept',
//       rating: '4.27',
//       stars: 'star5',
//     }]
//   };
//   var compiled = template(context);
//   $('.side-reading').append(compiled);
// });

/////////////////////////
// Main Reading Read////
/////////////////////////

$(function () {
  var source = $("#book-example").html();
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
      author: 'Steinback, John',
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
