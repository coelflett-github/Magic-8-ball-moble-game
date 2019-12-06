window.onload = function () {

document.addEventListener("deviceready", init, false); // check that Mobile devices is ready, if it is, run init() function.
init(); // use for testing on chrome - dont need to have for phone gap 
};

function init() {  // Application code
    var x;
    
 $("#submit").on("click", function(event) {
    x = Math.floor((Math.random() * 5) + 1);
//    document.getElementById("output").innerHTML = x;

     if ( x == 1 ) {
    //     answer = "do it";
    //      document.getElementById("output2").innerHTML = answer;
         var myImage = new Image();
        $('#myImage').attr('src','imgs/answer_no.png');
       }

    if ( x == 2 ) {
    //     answer = "it works";
    //      document.getElementById("output2").innerHTML = answer;
            var myImage = new Image();
        $('#myImage').attr('src','imgs/answer_yes.png');
       } 

    if ( x == 3 ) {
    //     answer = "i dont know";
    //      document.getElementById("output2").innerHTML = answer;
            var myImage = new Image();
        $('#myImage').attr('src','imgs/answer_error.png');
       }
     
    if ( x == 4 ) {
    //     answer = "i dont know";
    //      document.getElementById("output2").innerHTML = answer;
            var myImage = new Image();
        $('#myImage').attr('src','imgs/answer_no_comment.png');
       }
     
    if ( x == 5 ) {
    //     answer = "i dont know";
    //      document.getElementById("output2").innerHTML = answer;
            var myImage = new Image();
        $('#myImage').attr('src','imgs/answer_sure.png');
       } 
     
    if ( x == 6 ) {
    //     answer = "i dont know";
    //      document.getElementById("output2").innerHTML = answer;
            var myImage = new Image();
        $('#myImage').attr('src','imgs/answer_mayde.png');
       } 
     
     
     
     $("#msg").text($("input[name=question]").val());
     
     console.log($("#msg"));
 
 });
   
    
    
    
    
$("#clear").on("click", function(event) {
    $("input[name=question]").val("");   
 });   
 
//      
//$("#submit").on("click",function() {
//    
//    console.log(event.keyCode)
//    var k = $(this).val();
//    if (event.keyCode == 13) {  
//        $("#msg").text(k);
//    }
//    });     
//    
    
     
 //  var x = $(".testing").text();
//  console.log(x)  
    
//    $(".testing").on("click", function(){
 //       y = y + 1;
//        $(".testing").text(y);
  //  })
    
    
    
//    var x, y;
    
 //   y = "hello my name is ";
    
 //      $(".testing").text(y + "?"); 
    
 //   $("#submit").on("click", function() {
  //      console.log("the button works");
 //       var name = $("input[name=name]").val();
   //     $(".testing").text(y + name); 
  //      
  //  });
    
    
  //          <script>
//function myFunction() {
//    var x = Math.floor((Math.random() * 7) + 1);
 //   document.getElementById("output").innerHTML = x;
//}
//</script>
    
    
}


