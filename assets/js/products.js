let slideIndex1 = 0;
let slideshowPaused1 = false; // flag variable to keep track of slideshow state
let slideTimeout1; // variable to hold the timeout ID
showSlides1();
function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  slides[slideIndex1 - 1].style.display = "block";
  // check flag variable to determine whether to continue or pause slideshow
  if (!slideshowPaused1) {
    slideTimeout1 = setTimeout(showSlides1, 3000);
  }
}
document.getElementById("open-slide1").addEventListener("click", function() {
  clearTimeout(slideTimeout1); // stop the current slideshow timeout
  slideshowPaused1 = true;
  // update slideIndex1 so that paused slide becomes first slide
  slideIndex1 = Array.from(document.getElementsByClassName("mySlides1")).indexOf(document.querySelector(".mySlides1:not([style*='display: none'])"));
});
document.getElementById("close-slide1").addEventListener("click", function() {
  slideshowPaused1 = false;
  showSlides1();
});
document.getElementById("open-slide2").addEventListener("click", function() {
  clearTimeout(slideTimeout1); // stop the current slideshow timeout
  slideshowPaused1 = true;
  // update slideIndex1 so that paused slide becomes first slide
  slideIndex1 = Array.from(document.getElementsByClassName("mySlides1")).indexOf(document.querySelector(".mySlides1:not([style*='display: none'])"));
});
document.getElementById("close-slide2").addEventListener("click", function() {
  slideshowPaused1 = false;
  showSlides1();
});
document.getElementById("open-slide3").addEventListener("click", function() {
  clearTimeout(slideTimeout1); // stop the current slideshow timeout
  slideshowPaused1 = true;
  // update slideIndex1 so that paused slide becomes first slide
  slideIndex1 = Array.from(document.getElementsByClassName("mySlides1")).indexOf(document.querySelector(".mySlides1:not([style*='display: none'])"));
});
document.getElementById("close-slide3").addEventListener("click", function() {
  slideshowPaused1 = false;
  showSlides1();
});
// Load the fancy window content after the pre-loader effect is visible
$(document).ready(function() {
  $('.m1').addClass('loaded');
});
let slideIndex2 = 0;
let slideshowPaused2 = false; // flag variable to keep track of slideshow state
let slideTimeout2; // variable to hold the timeout ID
showSlides2();
function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }
  slides[slideIndex2 - 1].style.display = "block";
  // check flag variable to determine whether to continue or pause slideshow
  if (!slideshowPaused2) {
    slideTimeout2 = setTimeout(showSlides2, 3000);
  }
}
document.getElementById("open-slide4").addEventListener("click", function() {
  clearTimeout(slideTimeout2); // stop the current slideshow timeout
  slideshowPaused2 = true;
  // update slideIndex2 so that paused slide becomes first slide
  slideIndex2 = Array.from(document.getElementsByClassName("mySlides2")).indexOf(document.querySelector(".mySlides2:not([style*='display: none'])"));
});
document.getElementById("close-slide4").addEventListener("click", function() {
  slideshowPaused2 = false;
  showSlides2();
});
document.getElementById("open-slide5").addEventListener("click", function() {
  clearTimeout(slideTimeout2); // stop the current slideshow timeout
  slideshowPaused2 = true;
  // update slideIndex2 so that paused slide becomes first slide
  slideIndex2 = Array.from(document.getElementsByClassName("mySlides2")).indexOf(document.querySelector(".mySlides2:not([style*='display: none'])"));
});
document.getElementById("close-slide5").addEventListener("click", function() {
  slideshowPaused2 = false;
  showSlides2();
});
document.getElementById("open-slide6").addEventListener("click", function() {
  clearTimeout(slideTimeout2); // stop the current slideshow timeout
  slideshowPaused2 = true;
  // update slideIndex2 so that paused slide becomes first slide
  slideIndex2 = Array.from(document.getElementsByClassName("mySlides2")).indexOf(document.querySelector(".mySlides2:not([style*='display: none'])"));
});
document.getElementById("close-slide6").addEventListener("click", function() {
  slideshowPaused2 = false;
  showSlides2();
});
// Load the fancy window content after the pre-loader effect is visible
$(document).ready(function() {
  $('.m2').addClass('loaded');
});
let slideIndex3 = 0;
let slideshowPaused3 = false; // flag variable to keep track of slideshow state
let slideTimeout3; // variable to hold the timeout ID
showSlides3();
function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {
    slideIndex3 = 1;
  }
  slides[slideIndex3 - 1].style.display = "block";
  // check flag variable to determine whether to continue or pause slideshow
  if (!slideshowPaused3) {
    slideTimeout3 = setTimeout(showSlides3, 3000);
  }
}
document.getElementById("open-slide7").addEventListener("click", function() {
  clearTimeout(slideTimeout3); // stop the current slideshow timeout
  slideshowPaused3 = true;
  // update slideIndex3 so that paused slide becomes first slide
  slideIndex3 = Array.from(document.getElementsByClassName("mySlides3")).indexOf(document.querySelector(".mySlides3:not([style*='display: none'])"));
});
document.getElementById("close-slide7").addEventListener("click", function() {
  slideshowPaused3 = false;
  showSlides3();
});
document.getElementById("open-slide8").addEventListener("click", function() {
  clearTimeout(slideTimeout3); // stop the current slideshow timeout
  slideshowPaused3 = true;
  // update slideIndex3 so that paused slide becomes first slide
  slideIndex3 = Array.from(document.getElementsByClassName("mySlides3")).indexOf(document.querySelector(".mySlides3:not([style*='display: none'])"));
});
document.getElementById("close-slide8").addEventListener("click", function() {
  slideshowPaused3 = false;
  showSlides3();
});
document.getElementById("open-slide9").addEventListener("click", function() {
  clearTimeout(slideTimeout3); // stop the current slideshow timeout
  slideshowPaused3 = true;
  // update slideIndex3 so that paused slide becomes first slide
  slideIndex3 = Array.from(document.getElementsByClassName("mySlides3")).indexOf(document.querySelector(".mySlides3:not([style*='display: none'])"));
});
document.getElementById("close-slide9").addEventListener("click", function() {
  slideshowPaused3 = false;
  showSlides3();
});
// Load the fancy window content after the pre-loader effect is visible
$(document).ready(function() {
  $('.m3').addClass('loaded');
});
window.addEventListener('load', function() {
  
    // Add "loaded" class to body element
    document.body.classList.add('loaded');
  
  });
  let slideIndex4 = 0;
  let slideshowPaused4 = false; // flag variable to keep track of slideshow state
  let slideTimeout4; // variable to hold the timeout ID
  showSlides4();
  function showSlides4() {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex4++;
    if (slideIndex4 > slides.length) {
      slideIndex4 = 1;
    }
    slides[slideIndex4 - 1].style.display = "block";
    // check flag variable to determine whether to continue or pause slideshow
    if (!slideshowPaused4) {
      slideTimeout4 = setTimeout(showSlides4, 3000);
    }
  }
  document.getElementById("open-slide10").addEventListener("click", function() {
    clearTimeout(slideTimeout4); // stop the current slideshow timeout
    slideshowPaused4 = true;
    // update slideIndex4 so that paused slide becomes first slide
    slideIndex4 = Array.from(document.getElementsByClassName("mySlides4")).indexOf(document.querySelector(".mySlides4:not([style*='display: none'])"));
  });
  document.getElementById("close-slide10").addEventListener("click", function() {
    slideshowPaused4 = false;
    showSlides4();
  });
  document.getElementById("open-slide11").addEventListener("click", function() {
    clearTimeout(slideTimeout4); // stop the current slideshow timeout
    slideshowPaused4 = true;
    // update slideIndex4 so that paused slide becomes first slide
    slideIndex4 = Array.from(document.getElementsByClassName("mySlides4")).indexOf(document.querySelector(".mySlides4:not([style*='display: none'])"));
  });
  document.getElementById("close-slide11").addEventListener("click", function() {
    slideshowPaused4 = false;
    showSlides4();
  });
  document.getElementById("open-slide12").addEventListener("click", function() {
    clearTimeout(slideTimeout4); // stop the current slideshow timeout
    slideshowPaused4 = true;
    // update slideIndex4 so that paused slide becomes first slide
    slideIndex4 = Array.from(document.getElementsByClassName("mySlides4")).indexOf(document.querySelector(".mySlides4:not([style*='display: none'])"));
  });
  document.getElementById("close-slide12").addEventListener("click", function() {
    slideshowPaused4 = false;
    showSlides4();
  });
  // Load the fancy window content after the pre-loader effect is visible
  $(document).ready(function() {
    $('.m4').addClass('loaded');
  });
  let slideIndex5 = 0;
  let slideshowPaused5 = false; // flag variable to keep track of slideshow state
  let slideTimeout5; // variable to hold the timeout ID
  showSlides5();
  function showSlides5() {
    let i;
    let slides = document.getElementsByClassName("mySlides5");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex5++;
    if (slideIndex5 > slides.length) {
      slideIndex5 = 1;
    }
    slides[slideIndex5 - 1].style.display = "block";
    // check flag variable to determine whether to continue or pause slideshow
    if (!slideshowPaused5) {
      slideTimeout5 = setTimeout(showSlides5, 3000);
    }
  }
  document.getElementById("open-slide13").addEventListener("click", function() {
    clearTimeout(slideTimeout5); // stop the current slideshow timeout
    slideshowPaused5 = true;
    // update slideIndex5 so that paused slide becomes first slide
    slideIndex5 = Array.from(document.getElementsByClassName("mySlides5")).indexOf(document.querySelector(".mySlides5:not([style*='display: none'])"));
  });
  document.getElementById("close-slide13").addEventListener("click", function() {
    slideshowPaused5 = false;
    showSlides5();
  });
  document.getElementById("open-slide14").addEventListener("click", function() {
    clearTimeout(slideTimeout5); // stop the current slideshow timeout
    slideshowPaused5 = true;
    // update slideIndex5 so that paused slide becomes first slide
    slideIndex5 = Array.from(document.getElementsByClassName("mySlides5")).indexOf(document.querySelector(".mySlides5:not([style*='display: none'])"));
  });
  document.getElementById("close-slide14").addEventListener("click", function() {
    slideshowPaused5 = false;
    showSlides5();
  });
  document.getElementById("open-slide15").addEventListener("click", function() {
    clearTimeout(slideTimeout5); // stop the current slideshow timeout
    slideshowPaused5 = true;
    // update slideIndex5 so that paused slide becomes first slide
    slideIndex5 = Array.from(document.getElementsByClassName("mySlides5")).indexOf(document.querySelector(".mySlides5:not([style*='display: none'])"));
  });
  document.getElementById("close-slide15").addEventListener("click", function() {
    slideshowPaused5 = false;
    showSlides5();
  });
  // Load the fancy window content after the pre-loader effect is visible
  $(document).ready(function() {
    $('.m5').addClass('loaded');
  });
  let slideIndex6 = 0;
  let slideshowPaused6 = false; // flag variable to keep track of slideshow state
  let slideTimeout6; // variable to hold the timeout ID
  showSlides6();
  function showSlides6() {
    let i;
    let slides = document.getElementsByClassName("mySlides6");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex6++;
    if (slideIndex6 > slides.length) {
      slideIndex6 = 1;
    }
    slides[slideIndex6 - 1].style.display = "block";
    // check flag variable to determine whether to continue or pause slideshow
    if (!slideshowPaused6) {
      slideTimeout6 = setTimeout(showSlides6, 3000);
    }
  }
  document.getElementById("open-slide16").addEventListener("click", function() {
    clearTimeout(slideTimeout6); // stop the current slideshow timeout
    slideshowPaused6 = true;
    // update slideIndex6 so that paused slide becomes first slide
    slideIndex6 = Array.from(document.getElementsByClassName("mySlides6")).indexOf(document.querySelector(".mySlides6:not([style*='display: none'])"));
  });
  document.getElementById("close-slide16").addEventListener("click", function() {
    slideshowPaused6 = false;
    showSlides6();
  });
  document.getElementById("open-slide17").addEventListener("click", function() {
    clearTimeout(slideTimeout6); // stop the current slideshow timeout
    slideshowPaused6 = true;
    // update slideIndex6 so that paused slide becomes first slide
    slideIndex6 = Array.from(document.getElementsByClassName("mySlides6")).indexOf(document.querySelector(".mySlides6:not([style*='display: none'])"));
  });
  document.getElementById("close-slide17").addEventListener("click", function() {
    slideshowPaused6 = false;
    showSlides6();
  });
  document.getElementById("open-slide18").addEventListener("click", function() {
    clearTimeout(slideTimeout6); // stop the current slideshow timeout
    slideshowPaused6 = true;
    // update slideIndex6 so that paused slide becomes first slide
    slideIndex6 = Array.from(document.getElementsByClassName("mySlides6")).indexOf(document.querySelector(".mySlides6:not([style*='display: none'])"));
  });
  document.getElementById("close-slide18").addEventListener("click", function() {
    slideshowPaused6 = false;
    showSlides6();
  });
  // Load the fancy window content after the pre-loader effect is visible
  $(document).ready(function() {
    $('.m6').addClass('loaded');
  });
  window.addEventListener('load', function() {
    
      // Add "loaded" class to body element
      document.body.classList.add('loaded');
    
    });