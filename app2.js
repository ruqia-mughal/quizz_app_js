




function inputclear(){
  var clearing = document.getElementById("inputarea");
 
  
  var pop = document.getElementById("pop");
  pop.innerHTML="Welcome "+clearing.value+" !! ";
  clearing.value = ""
 
}

    var j = 0;
    
    var k = "Let's start!!";
    
    
    function typing() {
    
        if (j<k.length) {
            document.getElementById("mid").innerHTML += k.charAt(j)
          
            j++;
            setTimeout(typing,100);
            
        }
    
    }
    typing();
    g=0;
    var p = "Are you ready??";
    function typing2() {
    
        if (g<p.length) {
          
           document.getElementById("off").innerHTML +=p.charAt(g);
           
            g++;
            setTimeout(typing2,200);
            
        }
    
    }
    