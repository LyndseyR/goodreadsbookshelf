/////////////////////////
// Hamburger Menu //////
/////////////////////////

$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.hamburger-menu').slideToggle('slow');
  });
});

////////////////////////////
// Search Icon Toggle Div /
//////////////////////////

$(document).ready(function(){
  $('#search-icon').click(function(){
    $('.search-window').slideToggle('slow');
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
      summary: "The exciting tales of Harry Potter, the young wizard-in-training, have taken the world by storm, and fans just can't get enough of the magical world of Hogwarts and beyond. If you buy one of the Harry Potter books, we guarantee you'll want the next... and the next... and the next -- so why not have them all, right at your fingertips?",
    },{
      title: 'When Christ and His Saints Slept',
      author: 'Penman, Sharon',
      cover: 'christ-saints-slept',
      rating: '4.24',
      stars: 'star5',
      summary: "A.D. 1135. As church bells tolled for the death of England's King Henry I, his barons faced the unwelcome prospect of being ruled by a woman: Henry's beautiful daughter Maude, Countess of Anjou. But before Maude could claim her throne, her cousin Stephen seized it. In their long and bitter struggle, all of England bled and burned.",
    },{
      title: 'The Sparrow',
      author: 'Russell, Mary',
      cover: 'sparrow',
      rating: '3.92',
      stars: 'star4',
      summary: "In 2019, humanity finally finds proof of extraterrestrial life when a listening post in Puerto Rico picks up exquisite singing from a planet that will come to be known as Rakhat. While United Nations diplomats endlessly debate a possible first contact mission, the Society of Jesus quietly organizes an eight-person scientific expedition of its own. What the Jesuits find is a world so beyond comprehension that it will lead them to question what it means to be human.",
    },{
      title: 'Grapes of Wrath',
      author: 'Steinback, John',
      cover: 'grapes-of-wrath',
      rating: '3.92',
      stars: 'star4',
      summary: "Steinbeck’s Pulitzer Prize winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads, driven from their homestead and forced to travel west to the promised land of California. A drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity.",
    },{
      title: 'The Book Thief',
      author: 'Zusak, Markus',
      cover: 'book-thief',
      rating: '4.36',
      stars: 'star5',
      summary: "Set during World War II in Germany, Markus Zusak’s groundbreaking new novel is the story of Liesel Meminger, a foster girl living outside of Munich. Liesel scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her foster father, she learns to read while the bombing raids from WWII are happening around them.",
    },{
      title: 'A Hope More Powerful Than the Sea',
      author: 'Fleming, Melissa',
      cover: 'hope-powerful-sea',
      rating: '4.42',
      stars: 'star5',
      summary: "Emotionally riveting and eye-opening, A Hope More Powerful Than the Sea is the incredible story of a young woman, an international crisis, and the triumph of the human spirit. Melissa Fleming shares the harrowing journey of Doaa Al Zamel, a young Syrian refugee in search of a better life.",
    },{
      title: 'Here Be Dragons',
      author: 'Penman, Sharon',
      cover: 'here-be-dragons',
      rating: '4.24',
      stars: 'star5',
      summary: "Thirteenth-century Wales is a divided country, at the mercy of England's ruthless. Then Llewelyn, Prince of North Wales, secures an uneasy truce with England by marrying the English king's beloved, illegitimate daughter, Joanna. Reluctant to wed her father's bitter enemy, Joanna slowly grows to love her charismatic and courageous husband who dreams of uniting Wales. But as John's attentions turn again and again to subduing Wales--and Llewelyn--Joanna must decide to which of these powerful men she owes her loyalty and love.",
    },{
      title: 'Falls Shadow',
      author: 'Penman, Sharon',
      cover: 'falls-shadow',
      rating: '4.38',
      stars: 'star4',
      summary: "This is Simon de Montfort's story—and the story of King Henry III, as weak and changeable as Montfort was brash and unbending. It is a saga of two opposing wills that would later clash in a storm of violence and betrayal, a story straight from the pages of history that brings the world of the thirteenth century completely, provocatively, and magnificently alive. Above all, this is a story of conflict and treachery, of human frailty and broken legends, a tale of pageantry and grandeur that is as unforgettable as it is real.",
    },{
      title: 'The Reckoning',
      author: 'Penman, Sharon',
      cover: 'the-reckoning',
      rating: '4.48',
      stars: 'star5',
      summary: "Here, alive from the pages of history, is the compelling tale of a Celtic society ruled by Llewelyn, Prince of Wales, on a collison course with a feudal realm of Edward I. WIth this last book in the extraordinary trilogy, Sharon Kay Penman has written a beautiful and moving conclusion to her medieval saga. For everyone who has read the earlier books in this incomparable series or ever wanted to experience the rich tapestry of British history and lore, this bold and romantic adventure must be read.",
    },{
      title: 'This is a Book',
      author: 'Martin, Demetri',
      cover: 'this-is-a-book',
      rating: '3.76',
      stars: 'star3',
      summary: "From the renowned comedian, creator, star and executive producer/multiple title-holder of Comedy Central's Important Things with Demetri Martin comes a bold, original, and rectangular kind of humor book.",
    },{
      title: 'Game of Thrones',
      author: 'Martin, George',
      cover: 'game-thrones1',
      rating: '4.44',
      stars: 'star4',
      summary: "As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must … and a dead enemy is a thing of beauty.",
    },{
      title: 'Ella Enchanted',
      author: 'Levine, Gail',
      cover: 'ella-enchanted',
      rating: '3.96',
      stars: 'star5',
      summary: "At birth, Ella is inadvertently cursed by an imprudent young fairy named Lucinda, who bestows on her the gift of obedience. Anything anyone tells her to do, Ella must obey. When her beloved mother dies, leaving her in the care of a mostly absent father, and later, a loathsome stepmother and two treacherous stepsisters, Ella's life and well-being seem to be in grave peril. But her intelligence and saucy nature keep her in good stead as she sets out on a quest for freedom and self-discovery as she tries to track down Lucinda to undo the curse."
    },{
      title: 'Animal Farm',
      author: 'Orwell, George',
      cover: 'animal-farm',
      rating: '3.86',
      stars: 'star3',
      summary: "This well-loved tale is, of course, a satire on the Soviet Communist system that still remains a powerful warning despite the changes in world politics since Animal Farm was first published.",
    },{
      title: 'The Cuckoos Calling',
      author: 'Galbraith, Robert',
      cover: 'cuckoos-calling',
      rating: '3.83',
      stars: 'star3',
      summary: "Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Strike is barely scraping by as a private investigator. Just when it looks as though the bill creditors will catch up to Strike he gets a case...You may think you know about the wealthy and famous, but you've never seen them under an investigation like this. ",
    },{
      title: 'The Silkworm',
      author: 'Galbraith, Robert',
      cover: 'silkworm',
      rating: '4.03',
      stars: 'star3',
      summary: "The Silkworm is the second in the series featuring private detective Cormoran Strike. He gets a disappearance case which the more Strike investigates, it becomes clear that there is more to this mans disappearance. The novelist (missing person) has just completed a manuscript featuring poisonous pen-portraits of almost everyone he knows. If the novel were to be published, it would ruin lives—meaning that there are a lot of people who might want him silenced",
    },{
      title: 'Career of Evil',
      author: 'Galbraith, Robert',
      cover: 'career-of-evil',
      rating: '4.21',
      stars: 'star4',
      summary: "Career of Evil is the third in the series featuring private detective Cormoran Strike and his assistant Robin Ellacott. A mystery and also a story of a man and a woman at a crossroads in their personal and professional lives. ",
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
