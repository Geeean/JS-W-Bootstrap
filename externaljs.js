$(document).ready(function(){
    console.log("ready");
    $('.alert').alert()
    
    $('button').click(function(){
        $('.alert').show()
    });

    $("#hide").click(function(){
        alert("we will never know");
    });

    $("#add1").html(".add()");
    $("#add1").on("click", function(event){
        $("#sample1").css("border", "2px solid red").add("#sample1").css("background", "orange");
    });

    $("#children").html(".children()");
    $("#children").on("click", function(event){
        $("#sample1").children("#child").html("YO IM GONE");
    });

    $("#each").html(".each()");
    $("#each").on("click", function(event){
        $("#sample1").each(function(i){
            if(this.style.color !== "teal"){
                this.style.color = "teal";
            }else{
                this.style.color = "brown";
            }
        });
    });

    $("#filter").html(".filter()");
    $("#filter").on("click", function(event){
        $(".box").css("background", "orange"); 

        $(".box").filter(function(i){
            return i === 0 || $(this).attr("id") === "fifth";
        })
        .css("border", "10px double red");
    });

    $("#find").html(".find()");
    $("#find").on("click", function(event){
        $("p").find("span").css("color", "red");
    });


    $("#firstb").html(".first()");
    $("#firstb").on("click", function(event){
        $("summary").first().css("background-color", "yellow");
    });

    $("#lastb").html(".last()");
    $("#lastb").on("click", function(event){
        $("ul li").last().css("background-color", "pink");
    });

    $("#hasb").html(".has()");
    $("#hasb").on("click", function(event){
        $("li").has("ul").css("background-color", "orange");
    });

    $("#notb").html(".not()");
    $("#notb").on("click", function(event){
        $("li").not(document.getElementById("notlist")).css("background-color", "teal");  
    });

    $("#parentb").html(".parent()");
    $("#parentb").on("click", function(event){
        $("li#item4a").parent().css("background-color", "green");
    });

    $("#parentsb").html(".parents()");
    $("#parentsb").on("click", function(event){
        $("#lists #item4a").parents().css("background-color", "green");
    });

    $("#clrparentsb").html(" Clear.parents()");
    $("#clrparentsb").on("click", function(event){
        $("#lists #item4a").parents().css("background-color", "white");
    });

    $("#sib").html(".sibling()");
    $("#sib").on("click", function(event){
        $("#lists #item2a").siblings().css("background-color", "purple");
    });

    $("#hover").hover(function(){
        $(this).append($("<span> Deez nuts </span>"));
    }, function(){
        $(this).find("span").last().remove();
    });
    
    let j = 1;

    $("offtoggle").html("Click to hide the offtest");

    $("#offfade").html("Click to test .fadeIn() and .fadeOut()");
    $("#offfade").on("click", function(event){
        $("#offset").fadeOut();
        $("#offset").fadeIn();
    });

    $("#offadein").html("Click to test .fadeToggle()");
    $("#offadein").on("click", function(event){
        $("#offset").fadeToggle();
    });

    $("#offtoggle").html("Click to hide .offset()");
    $("#offtoggle").on("click", function(event){
        $("#offset").toggle();

        j = j*-1;

        if(j == 1){
            $("#offtoggle").html("Click to hide offset");
        }
        if(j == -1){
            $("#offtoggle").html("Click to reveal offset");
        }
    });

    $("#offt").html("test .off() for Offtest Toggle");
    $("#offt").on("click", function( event ) {
      $("#offtoggle").off("click");
        
    });

    $( ".target" ).change(function() {
        alert( "The text has been changed!" );
      });

    $( "#targ" ).blur(function() {
      alert( "The input field has lost its focus!" );
    })
    
    $( "#targe" ).focus(function() {
        $("span").css("display", "inline").fadeOut(2000);
      });
    
    let v = 1;
    $("#hideb").html("test .hide()");
    $("#hideb").click(function(){
      $("#hidetest").toggle();
      v = v*-1;
      console.log(v);

      if( v == 1){
          $("#hideb").html("Click to Hide");
      };
      if (v == -1){
          $("#hideb").html(" Click to reveal");
      }
    });

    $("#showb").html("test .show()");
    $("#showb").click(function(){
      $("#hidetest").show();
    });

    $("#slub").html("test .slideUp()");
    $("#slub").click(function(){
      $("#hidetest").slideUp();
    });

    $("#sldb").html("test .slideDown()");
    $("#sldb").click(function(){
      $("#hidetest").slideDown();
    });

    $("#sltb").html("test .slideToggle()");
    $("#sltb").click(function(){
      $("#hidetest").slideToggle();
    });

    $("#hcb1").click(function(){
        alert($("#hcb1").hasClass("yesclass"));
    });

    $("#hcb2").click(function(){
        alert($("#hcb2").hasClass("yesclass"));
    });

    $("#hcb3").click(function(){
        alert($("#hcb3").hasClass("yesclass"));
    });

    $("#rmc1").click(function(){
        $("#hcb1").removeClass("yesclass");
    });

    $("#adc1").click(function(){
        $("#hcb1").addClass("yesclass");
    });

    $("#tc1").click(function(){
        $("#hcb3").toggleClass("yesclass");
    });

    $("#attb").click(function(){
        $("#monkey").attr("width", "500" );
    });

    $("#adaf").click(function(){
        $("#app").after("TextAfter")
    });
    $("#adbf").click(function(){
        $("#app").before("TextBefore")
    });
    $("#appendb").click(function(){
        $("#app").append("Appended")
    });
    $("#prependb").click(function(){
        $("#app").prepend("Prepended")
    });
    $("#appendtb").click(function(){
        $("<span>AppendTo</span>").appendTo("#app1")
    });
    $("#prependtb").click(function(){
        $("<span>PrependTo</span>").prependTo("#app1")
    });
    $("#rmvb").click(function(){
        $("#app").remove()
    });
    $("#repl").click(function(){
        $("<span>Replaced!</span>").replaceAll("#app1")
    });
    $("#replw").click(function(){
        $("#app2").replaceWith("<span>Replaced With</span>")
    });
});