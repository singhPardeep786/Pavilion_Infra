function navbar(){
    //	window.addEventListener("resize", function() {
      //		"use strict"; window.location.reload(); 
      //	});
      
      
      document.addEventListener("DOMContentLoaded", function(){
              
      
        /////// Prevent closing from click inside dropdown
      document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      })
  
  
  
      // make it as accordion for smaller screens
      if (window.innerWidth < 992) {
  
        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
          everydropdown.addEventListener('hidden.bs.dropdown', function () {
            // after dropdown is hidden, then find all submenus
              this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                // hide every submenu as well
                everysubmenu.style.display = 'none';
              });
          })
        });
        
        document.querySelectorAll('.dropdown-menu a').forEach(function(element){
          element.addEventListener('click', function (e) {
      
              let nextEl = this.nextElementSibling;
              if(nextEl && nextEl.classList.contains('submenu')) {	
                // prevent opening link if link needs to open dropdown
                e.preventDefault();
                console.log(nextEl);
                if(nextEl.style.display == 'block'){
                  nextEl.style.display = 'none';
                } else {
                  nextEl.style.display = 'block';
                }
  
              }
          });
        })
      }
      // end if innerWidth
  
    }); 
    // DOMContentLoaded  end
  }
  navbar()

  function swiper(){
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'fade',
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  swiper()

  // function navbarScrollAnimation(){

  //   window.onscroll = () => { navbarAnimation () }
    
  //   function navbarAnimation (){
  //     const header = document.getElementById('header');
  //     const logoDisplay = document.querySelector('.logo_display')

  //     if(document.documentElement.scrollTop > 50){

  //       header.style.backdropFilter = "blur(10px)";
  //       header.style.transform = "translateY(-100%)";

  //       // logoDisplay.style.scale = .9;
  //       // logoDisplay.style.padding = '.5rem 0';
    

  //     } else {
  //       header.style.backdropFilter = "blur(0px)";
  //       header.style.transform = "translateY(0%)";
  //       // logoDisplay.style.scale = 1;
  //       // logoDisplay.style.padding = '1rem 0';
        
  //     }
      
  //   }    
  //   navbarAnimation()
  // }
  // navbarScrollAnimation()

  function navbarScrollAnimation() {
    let lastScrollTop = 0; 
  
    window.onscroll = () => {
      navbarAnimation();
    };
  
    function navbarAnimation() {
      const header = document.getElementById('header');
      let currentScrollTop = document.documentElement.scrollTop;
      const logoDisplay = document.querySelector('.logo_display')
  
      if (currentScrollTop > 80) {
  
        header.style.backdropFilter = "blur(10px)";
        header.style.background = "var(--collapsetransparent2)";
        logoDisplay.style.width = "13%";
  
        if (currentScrollTop > lastScrollTop) {
          header.style.transform = "translateY(-100%)";
        } else {
          header.style.transform = "translateY(0%)";
        }
      } else {
        header.style.backdropFilter = "blur(0px)";
        header.style.background = "var(--collapsetransparent)";
        header.style.transform = "translateY(0%)";
        logoDisplay.style.width = "17%";

      }
  
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }
  
    navbarAnimation();
  }
  
  navbarScrollAnimation();


  function gsapAnimations(){
    gsap.to("#video", {
      scale: 1,
      duration: 1.2,
      scrollTrigger: {
        trigger: "#video",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 3,
        // markers: true,
      }
    })
  
    gsap.to(".about_overlay", {
      x: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".about_overlay",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 5,
        // markers: true,
      }
    })

    gsap.to(".about_overlay2", {
      x: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".about_overlay2",
        scroller: "body",
        start: "top 60%",
        end: "top 40%",
        scrub: 5,
        // markers: true,
      }
    })

    gsap.to(".about_overlay3", {
      x: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".about_overlay3",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 5,
        // markers: true,
      }
    })

    gsap.to(".about_overlay4", {
      x: "-100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".about_overlay4",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 5,
        // markers: true,
      }
    })

    gsap.to(".about_overlay5", {
      x: "-100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".about_overlay5",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: 5,
        // markers: true,
      }
    })

    gsap.to(".quality_overlay", {
      x: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".quality_overlay",
        scroller: "body",
        start: "top 70%",
        end: "top 45%",
        scrub: 5,
        // markers: true,
      }
    })
    
    gsap.to(".contact-form-overlay", {
      y: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contact-form-overlay",
        scroller: "body",
        start: "top 80%",
        end: "top 45%",
        scrub: 5,
        // markers: true,
      }
    })

    gsap.to(".home_page_about_overlay", {
      y: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".home_page_about_overlay",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 5,
        // markers: true,
      }
    })
    
    gsap.to(".key_management_overlay", {
      y: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".key_management_overlay",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 5,
        // markers: true,
      }
    })

    gsap.to("#background_img", {
      scale: 1,
      duration: 1.2,
      scrollTrigger: {
        trigger: "#background_img",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 5,
        // markers: true,
      }
    })
  }
  gsapAnimations()

  function backgroundAnimation(){
    document.addEventListener('DOMContentLoaded', function() {
      const backgroundContainer = document.querySelector('.background-container');
      const options = document.querySelectorAll('.option');
      let currentOption = null;

      function setBackground(option) {
          const bgImage = option.getAttribute('data-bg');
          backgroundContainer.style.backgroundImage = `url(${bgImage})`;
          if (currentOption) currentOption.classList.remove('active');
          option.classList.add('active');
          currentOption = option;
      }

      function handleInteraction(option) {
          setBackground(option);
          option.blur(); // Remove focus after interaction
      }

      options.forEach(option => {
          option.addEventListener('mouseover', () => handleInteraction(option));
          option.addEventListener('focus', () => handleInteraction(option));
          option.addEventListener('touchstart', (e) => {
              e.preventDefault();
              handleInteraction(option);
          });
      });

      // Set initial background
      if (options.length > 0) {
          setBackground(options[0]);
      }

      // Preload images
      function preloadImages() {
          const imagePromises = Array.from(options).map(option => {
              return new Promise((resolve, reject) => {
                  const img = new Image();
                  img.onload = resolve;
                  img.onerror = reject;
                  img.src = option.getAttribute('data-bg');
              });
          });

          Promise.all(imagePromises)
              .then(() => console.log('All images preloaded successfully'))
              .catch(error => console.error('Error preloading images:', error));
      }

      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  preloadImages();
                  observer.disconnect();
              }
          });
      }, { rootMargin: '200px' });

      observer.observe(backgroundContainer);
  });
  }
  backgroundAnimation()

 
  function formAnimation(){
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically send the form data to your server
      console.log('Form submitted');
      // Reset form after submission
      this.reset();
  });
  }
  formAnimation()
  