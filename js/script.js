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
      summary: "Harry Potter is the most miserable, lonely boy you can imagine. He’s shunned by his relatives, the Dursley’s, that have raised him since he was an infant. He’s forced to live in the cupboard under the stairs, forced to wear his cousin Dudley’s hand-me-down clothes, and forced to go to his neighbour’s house when the rest of the family is doing something fun...",
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
      summary: "In 2019, humanity finally finds proof of extraterrestrial life when a listening post in Puerto Rico picks up exquisite singing from a planet that will come to be known as Rakhat. While United Nations diplomats endlessly debate a possible first contact mission, the Society of Jesus quietly organizes an eight-person scientific expedition of its own...",
    },{
      title: 'Grapes of Wrath',
      author: 'Steinback, John',
      cover: 'grapes-of-wrath',
      rating: '3.92',
      stars: 'star4',
      summary: "Steinbeck’s Pulitzer Prize winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads, driven from their homestead and forced to travel west to the promised land of California. A drama that is intensely human yet majestic in its scale and moral vision, elemental...",
    },{
      title: 'The Book Thief',
      author: 'Zusak, Markus',
      cover: 'book-thief',
      rating: '4.36',
      stars: 'star5',
      summary: "Set during World War II in Germany, Markus Zusak’s groundbreaking new novel is the story of Liesel Meminger, a foster girl living outside of Munich. Liesel scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her foster father, she learns to read amid the bombing raids...",
    },{
      title: 'A Hope More Powerful Than the Sea',
      author: 'Fleming, Melissa',
      cover: 'hope-powerful-sea',
      rating: '4.42',
      stars: 'star5',
      summary: "Emotionally riveting and eye-opening, A Hope More Powerful Than the Sea is the incredible story of a young woman, whose in the middle of an international crisis. Her triumpht spirit will move everyone, and will show us a different side to the faceless news we've grown accustomed to reading.  Melissa Fleming shares the harrowing journey of Doaa...",
    },{
      title: 'Here Be Dragons',
      author: 'Penman, Sharon',
      cover: 'here-be-dragons',
      rating: '4.24',
      stars: 'star5',
      summary: "Thirteenth-century Wales is a divided country, at the mercy of England. Then Llewelyn, Prince of North Wales, secures an uneasy truce with England by marrying the English king's beloved, illegitimate daughter, Joanna. Reluctant to wed her father's bitter enemy, Joanna slowly grows to love her charismatic and courageous husband who dreams...",
    },{
      title: 'Falls Shadow',
      author: 'Penman, Sharon',
      cover: 'falls-shadow',
      rating: '4.38',
      stars: 'star4',
      summary: "This is Simon de Montfort's story—and the story of King Henry III, as weak and changeable as Montfort was brash and unbending. It is a saga of two opposing wills that would later clash in a storm of violence and betrayal, a story straight from the pages of history that brings the world of the thirteenth century completely, provocatively, and magnificently...",
    },{
      title: 'The Reckoning',
      author: 'Penman, Sharon',
      cover: 'the-reckoning',
      rating: '4.48',
      stars: 'star5',
      summary: "Here, alive from the pages of history, is the compelling tale of a Celtic society ruled by Llewelyn, Prince of Wales, on a collison course with a feudal realm of Edward I. WIth this last book in the extraordinary trilogy, Sharon Kay Penman has written a beautiful and moving conclusion to her medieval saga. For everyone who has read the earlier books...",
    },{
      title: 'This is a Book',
      author: 'Martin, Demetri',
      cover: 'this-is-a-book',
      rating: '3.76',
      stars: 'star3',
      summary: "From the renowned comedian, creator, star and executive producer/multiple title-holder of Comedy Central's Important Things with Demetri Martin comes a bold, original, and rectangular kind of humor book. (That the author designed the jacket and cover artwork himself suggests that this process was a labor of love.) Several self-aware...",
    },{
      title: 'Game of Thrones',
      author: 'Martin, George',
      cover: 'game-thrones1',
      rating: '4.44',
      stars: 'star4',
      summary: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing...",
    },{
      title: 'Ella Enchanted',
      author: 'Levine, Gail',
      cover: 'ella-enchanted',
      rating: '3.96',
      stars: 'star5',
      summary: "At birth, Ella is inadvertently cursed by an imprudent young fairy named Lucinda, who bestows on her the gift of obedience. Anything anyone tells her to do, Ella must obey. When her beloved mother dies, leaving her in the care of a mostly absent father, and later, a loathsome stepmother and two treacherous stepsisters, Ella's life and well..."
    },{
      title: 'Animal Farm',
      author: 'Orwell, George',
      cover: 'animal-farm',
      rating: '3.86',
      stars: 'star3',
      summary: "This well-loved tale is, of course, a satire on the Soviet Communist system that still remains a powerful warning despite the changes in world politics since Animal Farm was first published. Captioned 'a fairy story', Animal Farm is anything but that. Sick and tired of maltreatment under their enslavement from man, the animals of Manor Farm revolt. Released...",
    },{
      title: 'The Cuckoos Calling',
      author: 'Galbraith, Robert',
      cover: 'cuckoos-calling',
      rating: '3.83',
      stars: 'star3',
      summary: "Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Strike is barely scraping by as a private investigator. Just when it looks as though the bill creditors will catch up to Strike he gets a case...You may think you know about the wealthy and famous, but you've never seen them under an investigation... ",
    },{
      title: 'The Silkworm',
      author: 'Galbraith, Robert',
      cover: 'silkworm',
      rating: '4.03',
      stars: 'star3',
      summary: "The Silkworm is the second in the series featuring private detective Cormoran Strike. He gets a disappearance case which the more Strike investigates, it becomes clear that there is more to this mans disappearance. The novelist (missing person) has just completed a manuscript featuring poisonous pen-portraits of almost everyone he knows.",
    },{
      title: 'Career of Evil',
      author: 'Galbraith, Robert',
      cover: 'career-of-evil',
      rating: '4.21',
      stars: 'star4',
      summary: "Career of Evil is the third in the series featuring private detective Cormoran Strike and his assistant Robin Ellacott. When a mysterious package is delivered to Robin Ellacott, she is horrified to discover that it contains a woman's severed leg. Her boss, private detective Cormoran Strike, is less surprised but no less alarmed. There are four people from his past... ",
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
      summary: "Les Mis is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. In the English-speaking world, the novel is usually referred to by its original French title. Jean Valjean, after spending nineteen years in jail and in the galleys for stealing a loaf of bread and for several...",
    },{
      title: 'Calvin and Hobbes',
      author: 'Watterson, Bill',
      cover: 'calvin-hobbes',
      rating: '4.61',
      stars: 'rate',
      summary: "Calvin and Hobbes is a daily comic strip by American cartoonist Bill Watterson. that was syndicated from November 18, 1985 to December 31, 1995. Commonly cited as the last great newspaper comic.Calvin and Hobbes follows the humorous antics of Calvin, a precocious, mischievous, and adventurous six-year-old boy, and Hobbes...",
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
      summary: "This book is for the rest of us. These comics document the wasting of entire beautiful weekends on the internet, the unbearable agony of holding hands on the street with a gorgeous guy, dreaming all day of getting home and back into pajamas, and wondering when, exactly, this adulthood thing begins. In other words, the horrors and awkwardnesses of life.",
    },{
      title: 'The Power of One',
      author: 'Courtenay, Bryce',
      cover: 'power-one',
      rating: '4.34',
      stars: 'rate',
      summary: "No stranger to the injustice of racial hatred, five-year-old Peekay learns the hard way the first secret of survival and self-preservation - the power of one. On a train home, Peekay meets Hoppie Groenewald, a boxer who teaches Peekay that little can beat big, and Peekay decides he will become the welterweight champion of the world. Even though he doesn't know how to box...",
    },{
      title: 'Rumors of War',
      author: 'Hughes, Dean',
      cover: 'rumors-war',
      rating: '4.25',
      stars: 'rate',
      summary: "Most people agree it was a fascinating time in world and American history. In fact, there is a charm and nostalgia about that dramatic period, says the author. Dean weaves in those aspects among the conflict in the series. The first volume, Rumors of War opens in 1938 with Elder Alex Thomas and his companion serving in Germany. It soon becomes obvious that he will never...",
    },{
      title: 'Hamilton',
      author: 'Miranda, Manuel',
      cover: 'hamilton',
      rating: '4.45',
      stars: 'rate',
      summary: "Lin-Manuel Miranda's groundbreaking musical Hamilton is as revolutionary as its subject, the poor kid from the Caribbean who fought the British, defended the Constitution, and helped to found the United States. Fusing hip-hop, pop, R&B, and the best traditions of theater, this once-in-a-generation show broadens the sound of Broadway, reveals the storytelling...",
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
