//Use CSS bootstrap for nicer buttons
//class btn btn-default
//JS bootstrap/jQuery


$(document).ready(function() {
 $("#quote-button").css("background-color", "#000");
  $("#tweet").css("background-color", "#000");
        
  $("#quote-button").on("click", function() {

var randomNumber=Math.floor(Math.random()*30);
    
var num = randomNumber;
var rand = num.toString();
var string = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + rand + "&mycallback";     
 $(".message").html(" ");
 $(".message").fadeIn("slow");
 $.getJSON(string, function(a) {
  $(".message").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
  

 });
  
 $("#tweet").on("click", function() {
 var html = $(".message").html(); 
 var split = html.split("");
 var newArray = [];
 for (i=4;i < 60;i++){
   newArray.push(split[i]);
   if (split[i] == "<") {
     
    newArray.splice(0, i);
       } 
   else if (split[i] == ";"){
     split[i].pop();
   }
 }    
   var quote = newArray.join(""); window.open("https://www.twitter.com/intent/tweet?text= " + quote + "..."+" I just used @callmekurisu 's random quote machine http://codepen.io/callmekurisu/full/revjmp/");
    location.reload();
  });  
  });  
  
});
