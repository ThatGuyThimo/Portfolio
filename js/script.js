let navbar = document.getElementById("navbar");
let mobileNavbar = document.getElementById("mobile-navbar");
let skills = document.getElementById("skills");
let sticky = navbar.offsetTop;
let skillOffset = skills.offsetTop;


// skillbar animation 
(function() {
  
    let SkillsBar = function( bars ) {
      this.bars = document.querySelectorAll( bars );
      if( this.bars.length > 0 ) {
        this.init();
      } 
    };
    
    SkillsBar.prototype = {
      init: function() {
        let self = this;
        self.index = -1;
        self.timer = setTimeout(function() {
          self.action();
        }, 500);
        
        
      },
      select: function( n ) {
        let self = this,
          bar = self.bars[n];
          
          if( bar ) {
            let width = bar.parentNode.dataset.percent;
          
            bar.style.width = width;
            bar.parentNode.classList.add( "complete" ); 
          }
      },
      action: function() {
        let self = this;
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

  // smooth scrolling on click to element
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
  document.getElementById("nav-skills").onclick = function() {
    let element = document.getElementById("skills")
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
  // smooth scrolling on click to element
  document.getElementById("mobile-home").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}
  document.getElementById("mobile-aboutMe").onclick = function() {
    let element = document.getElementById("introduction")
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
  document.getElementById("mobile-nav-skills").onclick = function() {
    let element = document.getElementById("skills")
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}

// on scroll do x
window.onscroll = function() {
  stickyNav()
  skillAnim()
};

// add the class sticky to the navbar if the scroll is past the offset and remove it if not
function stickyNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    mobileNavbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    mobileNavbar.classList.remove("sticky");
  }
}

// start skillbar animation when in view
function skillAnim() {
  if (isInViewport(skills)) {
    new SkillsBar( ".skillbar-bar" ); // start skills animation
  }
}

// check if elemnt is halfway inside the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();

  let offset = (rect.bottom - rect.top) / 2
  offset = window.innerHeight + offset
  return (
      rect.bottom <= offset
  );
}
