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
  $('#search-icon, #search-submit').click(function(){
    $('.search-window').slideToggle('slow');
  });
});

// $(document).ready(function () { doesn't work
//     $('#search-icon').click(function (e) {
//         $('.search-window').stop(true).slideToggle();
//     });
//     $(document).click(function (e) {
//         if (!$(e.target).closest('#search-icon, .search-window').length) {
//             $('.search-window').stop(true).slideUp();
//         }
//     });
// });




// $(document).ready(function (){ not working
//   $('#search-icon').click(function(e){
//     e.stopPropagation();
//       $('.search-window').slideToggle();
//   });
//   $('.search-window').click(function(e){
//     e.stopPropagation();
//   });
//   $(document).click(function(){
//     $('.search-window').slideUp();
//   });
//
// });

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
      summary: "Harry Potter is the most miserable, lonely boy you can imagine. He’s shunned by his relatives, the Dursley’s, that have raised him since he was an infant. He’s forced to live in the cupboard under the stairs, forced to wear his cousin Dudley’s hand-me-down clothes, and forced to go to his neighbour’s house when the rest of the family is doing something fun. Then one day Harry received his first letter in the mail. His uncle was furious and refused to let Harry open his letter. Yet the next day six more letters appeared. Someone is determined to get a hold of Harry."
    },{
      title: 'When Christ and His Saints Slept',
      author: 'Penman, Sharon',
      cover: 'christ-saints-slept',
      rating: '4.24',
      stars: 'star5',
      summary: "A.D. 1135. As church bells tolled for the death of England's King Henry I, his barons faced the unwelcome prospect of being ruled by a woman: Henry's beautiful daughter Maude, Countess of Anjou. But before Maude could claim her throne, her cousin Stephen seized it. In their long and bitter struggle, all of England bled and burned. Sharon Kay Penman's magnificent fifth novel summons to life a spectacular medieval tragedy whose unfolding breaks the heart even as it prepares the way for splendors to come—the glorious age of Eleanor of Aquitaine and the Plantagenets that would soon illumine the world."
    },{
      title: 'The Sparrow',
      author: 'Russell, Mary',
      cover: 'sparrow',
      rating: '3.92',
      stars: 'star4',
      summary: "In 2019, humanity finally finds proof of extraterrestrial life when a listening post in Puerto Rico picks up exquisite singing from a planet that will come to be known as Rakhat. While United Nations diplomats endlessly debate a possible first contact mission, the Society of Jesus quietly organizes an eight-person scientific expedition of its own. What the Jesuits find is a world so beyond comprehension that it will lead them to question what it means to be human. An incredibly powerful tale of faith and perseverance in one which everone gets tested."
    },{
      title: 'Grapes of Wrath',
      author: 'Steinback, John',
      cover: 'grapes-of-wrath',
      rating: '3.92',
      stars: 'star4',
      summary: "Steinbeck’s Pulitzer Prize winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads, driven from their homestead and forced to travel west to the promised land of California. A drama that is intensely human yet majestic in its scale and moral vision, elemental elemental yet plainspoken, tragic but ultimately stirring in its human dignity. A portrait of the conflict between the powerful and the powerless, of one man’s fierce reaction to injustice, and of one woman’s stoical strength, the novel captures the horrors of the Great Depression and probes the very nature of equality and justice in America."
    },{
      title: 'The Book Thief',
      author: 'Zusak, Markus',
      cover: 'book-thief',
      rating: '4.36',
      stars: 'star5',
      summary: "Set during World War II in Germany, Markus Zusak’s groundbreaking new novel is the story of Liesel Meminger, a foster girl living outside of Munich. Liesel scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her foster father, she learns to read she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement. Told from death's own perspective this is an unforgettable story about the ability of books to feed the soul."
    },{
      title: 'A Hope More Powerful Than the Sea',
      author: 'Fleming, Melissa',
      cover: 'hope-powerful-sea',
      rating: '4.42',
      stars: 'star5',
      summary: "Emotionally riveting and eye-opening, A Hope More Powerful Than the Sea is the incredible story of a young woman, whose in the middle of an international crisis. Her triumpht spirit will move everyone, and will show us a different side to the faceless news we've grown accustomed to reading.  Melissa Fleming shares the harrowing journey of Doaa a young Syrian refugee in search of a better life. Doaa and her family leave war-torn Syria for Egypt where the climate is becoming politically unstable and increasingly dangerous."
    },{
      title: 'Here Be Dragons',
      author: 'Penman, Sharon',
      cover: 'here-be-dragons',
      rating: '4.24',
      stars: 'star5',
      summary: "Thirteenth-century Wales is a divided country, at the mercy of England. Then Llewelyn, Prince of North Wales, secures an uneasy truce with England by marrying the English king's beloved, illegitimate daughter, Joanna. Reluctant to wed her father's bitter enemy, Joanna slowly grows to love her charismatic and courageous husband who dreams of uniting Wales. But as John's attentions turn again and again to subduing Wales--and Llewelyn--Joanna must decide to which of these powerful men she owes her loyalty and love."
    },{
      title: 'Falls Shadow',
      author: 'Penman, Sharon',
      cover: 'falls-shadow',
      rating: '4.38',
      stars: 'star4',
      summary: "This is Simon de Montfort's story—and the story of King Henry III, as weak and changeable as Montfort was brash and unbending. It is a saga of two opposing wills that would later clash in a storm of violence and betrayal, a story straight from the pages of history that brings the world of the thirteenth century completely, provocatively, and magnificently alive. Above all, this is a story of conflict and treachery, of human frailty and broken legends, a tale of pageantry and grandeur that is as unforgettable as it is real...."
    },{
      title: 'The Reckoning',
      author: 'Penman, Sharon',
      cover: 'the-reckoning',
      rating: '4.48',
      stars: 'star5',
      summary: "Here, alive from the pages of history, is the compelling tale of a Celtic society ruled by Llewelyn, Prince of Wales, on a collison course with a feudal realm of Edward I. WIth this last book in the extraordinary trilogy, Sharon Kay Penman has written a beautiful and moving conclusion to her medieval saga. For everyone who has read the earlier books in this incomparable series or ever wanted to experience the rich tapestry of British history and lore, this bold and romantic adventure must be read."
    },{
      title: 'This is a Book',
      author: 'Martin, Demetri',
      cover: 'this-is-a-book',
      rating: '3.76',
      stars: 'star3',
      summary: "From the renowned comedian, creator, star and executive producer/multiple title-holder of Comedy Central's Important Things with Demetri Martin comes a bold, original, and rectangular kind of humor book. Demetri's first literary foray features longer-form essays and conceptual pieces (such as Protagonists' Hospital, a melodrama about the clinic doctors who treat only the flesh wounds and minor head scratches of Hollywood action heroes), as well as his trademark charts, doodles, drawings, one-liners, and lists (i.e., the world views of optimists, pessimists and contortionists), Martin's material is varied, but his unique voice and brilliant mind will keep readers in stitches from beginning to end."
    },{
      title: 'Game of Thrones',
      author: 'Martin, George',
      cover: 'game-thrones1',
      rating: '4.44',
      stars: 'star4',
      summary: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must … and a dead enemy is a thing of beauty."
    },{
      title: 'Ella Enchanted',
      author: 'Levine, Gail',
      cover: 'ella-enchanted',
      rating: '3.96',
      stars: 'star5',
      summary: "At birth, Ella is inadvertently cursed by an imprudent young fairy named Lucinda, who bestows on her the gift of obedience. Anything anyone tells her to do, Ella must obey. When her beloved mother dies, leaving her in the care of a mostly absent father, and later, a loathsome stepmother and two treacherous stepsisters, Ella's life and well Ella's life and well-being seem to be in grave peril. But her intelligence and saucy nature keep her in good stead as she sets out on a quest for freedom and self-discovery as she tries to track down Lucinda to undo the curse."
    },{
      title: 'Animal Farm',
      author: 'Orwell, George',
      cover: 'animal-farm',
      rating: '3.86',
      stars: 'star3',
      summary: "As ferociously fresh as it was more than a half century ago, this remarkable allegory of a downtrodden society of overworked, mistreated animals, and their quest to create a paradise of progress, justice, and equality is one of the most scathing satires ever published. As we witness the rise and bloody fall of the revolutionary animals, we begin to recognize the seeds of totalitarianism in the most idealistic organization; and in our most charismatic leaders, the souls of our cruelest oppressors."
    },{
      title: 'The Cuckoos Calling',
      author: 'Galbraith, Robert',
      cover: 'cuckoos-calling',
      rating: '3.83',
      stars: 'star3',
      summary: "The Cuckoo's Calling is a 2013 crime fiction novel by J. K. Rowling, published under the pseudonym Robert Galbraith. A brilliant mystery in a classic vein: Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, and creditors are calling. He has also just broken up with his longtime girlfriend and is living in his office. Then John Bristow walks through his door with an amazing story..."
    },{
      title: 'The Silkworm',
      author: 'Galbraith, Robert',
      cover: 'silkworm',
      rating: '4.03',
      stars: 'star3',
      summary: "When novelist Owen Quine goes missing, his wife calls in private detective Cormoran Strike. At first, Mrs. Quine just thinks her husband has gone off by himself for a few days—as he has done before—and she wants Strike to find him and bring him home. But as Strike investigates, it becomes clear that there is more to Quine's disappearance than his wife realizes. The novelist has just completed a manuscript featuring poisonous pen-portraits of almost everyone he knows. If the novel were to be published, it would ruin lives—meaning that there are a lot of people who might want him silenced."
    },{
      title: 'Career of Evil',
      author: 'Galbraith, Robert',
      cover: 'career-of-evil',
      rating: '4.21',
      stars: 'star4',
      summary: "Cormoran Strike is back, with his assistant Robin Ellacott, in a mystery based around soldiers returning from war. When a mysterious package is delivered to Robin Ellacott, she is horrified to discover that it contains a woman’s severed leg. Her boss, private detective Cormoran Strike, is less surprised but no less alarmed. There are four people from his past who he thinks could be responsible – and Strike knows that any one of them is capable of sustained and unspeakable brutality. With the police focusing on the one suspect Strike is increasingly sure is not the perpetrator, he and Robin take matters into their own hands, and delve into the dark and twisted worlds of the other three men. But as more horrendous acts occur, time is running out for the two of them…"
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
      summary: "Introducing one of the most famous characters in literature, Jean Valjean—the noble peasant imprisoned for stealing a loaf of bread—Les Misérables ranks among the greatest novels of all time. In it, Victor Hugo takes readers deep into the Parisian underworld, immerses them in a battle between good and evil, and carries them to the barricades during the uprising of 1832 with a breathtaking realism that is unsurpassed in modern prose. Within his dramatic story are themes that capture the intellect and the emotions: crime and punishment, the relentless persecution of Valjean by Inspector Javert, the desperation of the prostitute Fantine, the amorality of the rogue Thénardier, and the universal desire to escape the prisons of our own minds."
    },{
      title: 'Calvin and Hobbes',
      author: 'Watterson, Bill',
      cover: 'calvin-hobbes',
      rating: '4.61',
      stars: 'rate',
      summary: "Calvin and Hobbes is unquestionably one of the most popular comic strips of all time. The imaginative world of a boy and his real-only-to-him tiger was first syndicated in 1985 and appeared in more than 2,400 newspapers when Bill Watterson retired on January 1, 1996. The entire body of Calvin and Hobbes cartoons published in a truly noteworthy tribute to this singular cartoon in The Complete Calvin and Hobbes. Composed of three hardcover, four-color volumes in a sturdy slipcase, this New York Times best-selling edition includes all Calvin and Hobbes cartoons that ever appeared in syndication. This is the treasure that all Calvin and Hobbes fans seek."
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
      summary: "These casually drawn, perfectly on-point comics by the hugely popular young Brooklyn-based artist Sarah Andersen are for the rest of us. They document the wasting of entire beautiful weekends on the internet, the unbearable agony of holding hands on the street with a gorgeous guy, and dreaming all day of getting home and back into pajamas. In other words, the horrors and awkwardnesses of young modern life. Oh and they are totally not autobiographical. At all. Adulthood Is a Myth presents many fan favorites plus dozens of all-new comics exclusive to this book. Like the work of fellow Millennial authors Allie Brosh, Grace Helbig, and Gemma Correll, Sarah's frankness on personal issues like body image, self-consciousness, introversion, relationships, and the frequency of bra-washing makes her comics highly relatable and deeply hilarious."
    },{
      title: 'The Power of One',
      author: 'Courtenay, Bryce',
      cover: 'power-one',
      rating: '4.34',
      stars: 'rate',
      summary: "The story follows an English-speaking South African boy named Peekay from 1939 to 1951. The story begins when Peekay's mother has a nervous breakdown, and Peekay ends up being raised by a Zulu wet nurse, Mary Mandoma, who eventually becomes his nanny. At a young age, Peekay is sent to a boarding school. As the youngest student attending the school, he is frequently harassed. The students call him Piskop (meaning piss-head) and rooinek (redneck—a name given to the British during the Boer War) among other names. This continues with an older boy, the Judge, and his partners who further punish him for his frequent bedwetting with verbal and physical abuse. The Judge is a Nazi sympathizer, and he has a hatred for the English, proclaiming that Hitler will march the English out to sea. The Afrikaans woman who runs the boarding school does not console him and walks around threateningly with a whip."
    },{
      title: 'Rumors of War',
      author: 'Hughes, Dean',
      cover: 'rumors-war',
      rating: '4.25',
      stars: 'rate',
      summary: "\“Every era has its own refiner's fire, and World War II put general Church membership and Utah to a test,” Dean Hughes explains. In Children of the Promise, his first historical fiction series for adults, Dean shows through the eyes of the Thomas family how LDS families were tested to the limit. Most people agree it was a fascinating time in world and American history. In fact, there is a charm and nostalgia about that dramatic period, says the author. Dean weaves in those aspects among the conflict in the series. The first volume, Rumors of War opens in 1938 with Elder Alex Thomas and his companion serving in Germany. It soon becomes obvious that he will never complete his mission. War is coming, and that will affect not only Elder Thomas but also his family back home in Salt Lake City."
    },{
      title: 'Hamilton',
      author: 'Miranda, Manuel',
      cover: 'hamilton',
      rating: '4.45',
      stars: 'rate',
      summary: "Lin-Manuel Miranda's groundbreaking musical Hamilton is as revolutionary as its subject, the poor kid from the Caribbean who fought the British, defended the Constitution, and helped to found the United States. Fusing hip-hop, pop, R&B, and the best traditions of theater, this once-in-a-generation show broadens the sound of Broadway, reveals the storytelling power of rap, and claims our country's origins for a diverse new generation. HAMILTON: THE REVOLUTION gives readers an unprecedented view of both revolutions, from the only two writers able to provide it. Miranda, along with Jeremy McCarter, a cultural critic and theater artist who was involved in the project from its earliest stages--\"since before this was even a show,\" according to Miranda--traces its development from an improbable perfor­mance at the White House to its landmark opening night on Broadway six years later."
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
