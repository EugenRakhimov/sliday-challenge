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
        // var winners=[]
       for(i=0;i<data.length;i++)
       {

         winners.push(new Customer(data[i]));
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
           $(".winners").children().detach();
    for(i=0;i<winners.length;i++)
       {
          // str="#customer"+winners[i].id
        $(".winners").append("<div class=\"customer\"> </div>");
        str=$(".customer").last();
        $(str).append("<p>Name:"+winners[i].name+"</p>");
        $(str).append("<p>email:"+winners[i].email+"</p>");
        $(str).append("<p>Phone:"+winners[i].phone_number+"</p>");
        $(str).append("<a class=\"more\" href=\"/winners/"+winners[i].id+"/notes\">more</a>" )
        $(str).append("<p></p>");
        $(str).append("<a class=\"delete\" href=\"/winners/"+winners[i].id+"\">Delete customer</a>" )

        // $(".main_page").append("<p>Name:"+winners[i].name+"</p>");
        // $(".main_page").append("<p>Name:"+winners[i].name+"</p>");

       }
       $(".winners").css("margin-left","30px")
  }
  function more_reaction()
  {
    $(".more").click(function( event ) {
       event.preventDefault();
       // console.log("more");
       notes_detach();
       targ=event.currentTarget;
       var link=$(targ).attr("href");

       $.get(link,function( data ) {
          //  var id=data.id;
          // var $points = $("#" + id + " .points");
          // var votes = data.votes;
          // $points.html(votes);

          $(".notes_area").append(data);
          $(".note").css("margin","15px");
          $(".notes_area").append("<form method=\"post\" action=\""+link+"\" id='notes_form'><input type=\"submit\" value=\"Post_note\"  ></form>")
          $(".notes_area").append("<textarea id=\"note_add\" rows=\"4\" cols=\"50\" form=\"notes_form\"></textarea>");
           $(".notes_area textarea").css("width","100%");
           notes_reaction();
          console.log(data);
      }, "html" );


      $(targ).css("color","red");
      // console.log();

          });

  }

}