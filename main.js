var images = ["British Royal Family.png" , "https://www.rd.com/wp-content/uploads/2019/01/shutterstock_3877750a-scaled.jpg", "1200px-Queen_Elizabeth_the_Queen_Mother_portrait.jpg" , "Queen_Elizabeth_II.jpg", "Margaret.jpg", "Charles.jpg", "Anne.jpg", "Andrew.jpg", "Edward.jpg"];
var names = ["British Royal Family","George VI", "Elizabeth Bowes-Lyon", "Elizabeth II", "Margaret", "Charles", "Anne", "Andrew", "Edward"];
var titles = ["", "Head of the Commonwealth" , "Late Queen of the UK" , "Head of the Commonwealth", "Countess of Snowdon" , "Prince of Wales" , "Princess Royale" , "Duke of York" , "Earl of Wessex"];
var lifespan = ["", "1895-1952", "1900-2002", "1926-present", "1930-2002", "1948-present", "1950-present", "1960-present", "1964-present"]
var wiki = ["https://en.wikipedia.org/wiki/Family_tree_of_the_British_royal_family", "https://en.wikipedia.org/wiki/George_VI", "https://en.wikipedia.org/wiki/Queen_Elizabeth_The_Queen_Mother", "https://en.wikipedia.org/wiki/Elizabeth_II", "https://en.wikipedia.org/wiki/Princess_Margaret,_Countess_of_Snowdon", "https://en.wikipedia.org/wiki/Charles,_Prince_of_Wales", "https://en.wikipedia.org/wiki/Anne,_Princess_Royal", "https://en.wikipedia.org/wiki/Prince_Andrew,_Duke_of_York", "https://en.wikipedia.org/wiki/Prince_Edward,_Earl_of_Wessex"]
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 8
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i] ;
    var updatedTitle = titles[i];
    var updatedLifespan = lifespan[i];
    var updatedWiki = wiki[i] 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("title").innerHTML = updatedTitle;
    document.getElementById("Time of reign").innerHTML = updatedLifespan;
    document.getElementById("wikipedia").src = updatedWiki;

}
