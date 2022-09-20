(function() {
  
    var SkillsBar = function( bars ) {
      this.bars = document.querySelectorAll( bars );
      if( this.bars.length > 0 ) {
        this.init();
      } 
    };
    
    SkillsBar.prototype = {
      init: function() {
        var self = this;
        self.index = -1;
        self.timer = setTimeout(function() {
          self.action();
        }, 500);
        
        
      },
      select: function( n ) {
        var self = this,
          bar = self.bars[n];
          
          if( bar ) {
            var width = bar.parentNode.dataset.percent;
          
            bar.style.width = width;
            bar.parentNode.classList.add( "complete" ); 
          }
      },
      action: function() {
        var self = this;
        self.index++;
        if( self.index == self.bars.length ) {
          clearTimeout( self.timer );
        } else {
          self.select( self.index );  
        }
        
        setTimeout(function() {
          self.action();
        },500);
      }
    };
    
    window.SkillsBar = SkillsBar;
    
  })();
  
  (function() {
    document.addEventListener( "DOMContentLoaded", function() {
      var skills = new SkillsBar( ".skillbar-bar" );
    });
  })();

  document.getElementById("home").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}
  document.getElementById("aboutMe").onclick = function() {
    let element = document.getElementById("introduction")
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
  document.getElementById("arrow").onclick = function() {
    let element = document.getElementById("introduction")
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}