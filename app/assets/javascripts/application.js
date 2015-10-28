// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function() {


	function get_winners(){
    $.get("/winners",function( data ) {
        
       $("#left_places").append("Only "+(365 - data.length) +" places left");
       // loaded_winners = data.winners
       for(i=0;i<data.length;i++)
       {

         winners.push(data[i].name);
         // console.log(winners[i]);
       }
       // console.log(folks);
       show_winners();
       more_reaction();
       // delete_reaction();
       return winners;
      }, "json" );
  }

  function show_winners()
  {
     // console.log(winners)
           // $(".winners").children().detach();
           max = (current+5 > winners.length)? winners.length: current+5;
    for(i=current;i<current+5;i++)
       {
          // str="#customer"+winners[i].id
        $(".winners").append("<div class=\"winner\"> </div>");
        str=$(".winner").last();
        $(str).append("<p>"+winners[i]+"</p>");
       }
       $(".winners").css("margin-left","30px")
       current += 5;
  }
  function more_reaction()
  {
    $(".more").click(function( event ) {
       event.preventDefault();
       // console.log("more");
       if (current < winners.length)
       {
	       show_winners();
	   }
	   else
	   {
	   	 alert("There is no more winners");
	   }
       
     });

  }

  current = 0;
  winners=[];
  notes=[];
  get_winners();

});