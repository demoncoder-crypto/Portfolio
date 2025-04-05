document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });
  } else {
    console.warn('AOS library not found.');
  }

  // Initialize particles.js
  if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#3b82f6" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.4, width: 1 }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  } else {
    console.warn('particlesJS library or #particles-js element not found.');
  }

  // Typing animation
  if (document.getElementById('typing-text') && typeof Typed !== 'undefined') {
    var typed = new Typed('#typing-text', {
      strings: [
        'Machine Learning Engineer',
        'Full Stack Developer',
        'Crypto Enthusiast ',
        'Problem Solver'
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: false
    });
  } else {
    console.warn('Typed library or #typing-text element not found.');
  }

  // Fixed skill bar animation code
  const animateSkills = function() {
    document.querySelectorAll('.skill-bar-fill').forEach(skill => {
      // Use data-width attribute if available, otherwise fallback to percentage text
      const targetWidth = skill.getAttribute('data-width') || skill.parentElement?.parentElement?.querySelector('.skill-bar-percentage')?.textContent || '0%';
      skill.style.width = targetWidth;
    });
  };

  // Check if we need to create the awesome cloud (Defensive coding)
  const aboutSection = document.getElementById('about');
  if (aboutSection && !aboutSection.querySelector('.about-awesome-cloud')) {
    const sectionTitle = aboutSection.querySelector('.section-title');
    if (sectionTitle) {
      const awesomeCloud = document.createElement('div');
      awesomeCloud.className = 'about-awesome-cloud';
      awesomeCloud.textContent = 'Cause I am awesome';
      sectionTitle.parentNode.insertBefore(awesomeCloud, sectionTitle.nextSibling);
    }
  }

  // Scroll progress bar
  const scrollProgress = document.getElementById('scrollProgressBar');
  if (scrollProgress) {
    window.addEventListener('scroll', function() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollHeight > 0) ? (scrollTop / scrollHeight) * 100 : 0;
      scrollProgress.style.width = scrollPercent + '%';
    });
  } else {
    console.warn('#scrollProgressBar element not found.');
  }

  // Observe skill sections for animation
  if (typeof IntersectionObserver !== 'undefined') {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const skillCategoryCards = document.querySelectorAll('.skill-category-card'); // Changed selector
    if (skillCategoryCards.length > 0) {
        skillCategoryCards.forEach(section => {
            skillObserver.observe(section);
        });
    } else {
        console.warn('No .skill-category-card elements found for IntersectionObserver.');
        // Fallback if no cards are found, maybe animate immediately?
        // animateSkills(); 
    }
  } else {
    console.warn('IntersectionObserver not supported, running skill animation immediately.');
    // Fallback for browsers that don't support IntersectionObserver
    animateSkills();
  }

  // Initialize tilt effect on project cards
  if (typeof VanillaTilt !== 'undefined') {
    const tiltElements = document.querySelectorAll(".project-card");
    if (tiltElements.length > 0) {
        VanillaTilt.init(tiltElements, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    } else {
        console.warn('No .project-card elements found for VanillaTilt.');
    }
  } else {
    console.warn('VanillaTilt library not found.');
  }

  // Simplified mouse trail effect
  const trail = document.createElement('div');
  trail.className = 'mouse-trail';
  document.body.appendChild(trail);
  
  let mouseX = 0, mouseY = 0;
  let isMouseMoving = false;
  let animationFrameId = null;
  
  document.addEventListener('mousemove', function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
      isMouseMoving = true;
      // Request animation frame to update position smoothly
      if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(updateTrailPosition);
      }
  });
  
  function updateTrailPosition() {
      if (isMouseMoving) {
          trail.style.left = mouseX + 'px';
          trail.style.top = mouseY + 'px';
          isMouseMoving = false; // Reset flag
      }
      animationFrameId = null; // Allow next frame request
  }
  
  // Parallax effect for section backgrounds (Check for ::before)
  document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const beforeStyle = getComputedStyle(section, '::before');
      if (beforeStyle.content !== 'none' && beforeStyle.position === 'absolute') { // Check if pseudo-element exists and is positioned
          const scrollPosition = window.scrollY;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition > sectionTop - window.innerHeight && 
              scrollPosition < sectionTop + sectionHeight) {
              const yPos = (scrollPosition - sectionTop) * 0.1;
              // Direct style manipulation on pseudo-elements isn't possible.
              // A common workaround is to use CSS variables.
              section.style.setProperty('--parallax-y', `${yPos}px`);
          }
      }
    });
  });
  // Add base style for parallax variable if using CSS vars:
  /* 
  section::before {
      transform: translateY(var(--parallax-y, 0px));
  } 
  */

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          try {
              const targetSection = document.querySelector(targetId);
              if (targetSection) {
                  window.scrollTo({
                      top: targetSection.offsetTop - 80, // Adjust offset for header
                      behavior: 'smooth'
                  });
                  
                  // --- ADD SECTION SWITCHING LOGIC --- 
                  const sections = document.querySelectorAll('section[id]'); // Select sections with an ID
                  sections.forEach(section => section.classList.remove('active'));
                  targetSection.classList.add('active');
                  // --- END SECTION SWITCHING LOGIC --- 

                  // Update active nav link
                  navLinks.forEach(navLink => navLink.classList.remove('active'));
                  this.classList.add('active');
              } else {
                  console.warn(`Target section '${targetId}' not found for smooth scroll.`);
              }
          } catch (error) {
              console.error(`Error finding target section '${targetId}':`, error);
          }
      });
    });
  } else {
      console.warn('No navigation links found for smooth scrolling.');
  }
  
  // Update active nav link on scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section[id]'); // Ensure section has an ID

    let currentActiveId = null;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentActiveId = '#' + section.getAttribute('id');
      }
    });
    
    navLinks.forEach(navLink => {
        if (navLink.getAttribute('href') === currentActiveId) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
  });

  // Function to ensure videos play correctly on all browsers
  const videoContainers = document.querySelectorAll('.video-container');
  if (videoContainers.length > 0) {
    // Add CSS for the play button overlay only if containers exist
    const style = document.createElement('style');
    style.textContent = `
      .video-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .play-button-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .play-button-overlay.visible {
        opacity: 1;
      }
      .play-button-overlay i {
        font-size: 3rem;
        color: white;
      }
    `;
    document.head.appendChild(style);
    
    // Initialize each video container
    videoContainers.forEach(container => {
      const video = container.querySelector('video');
      const overlay = container.querySelector('.play-button-overlay');
      
      if (!video || !overlay) {
          console.warn('Skipping video container - missing video or overlay element.');
          return; // Skip this container if elements are missing
      }
      
      // Hide overlay initially
      overlay.style.display = 'none';
      
      // Force muted for autoplay
      video.muted = true;
      video.playsInline = true; // Ensure playsinline is set
      
      // Try to play the video
      const playVideo = function() {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            // Autoplay successful - ensure overlay is hidden
            overlay.style.display = 'none';
            overlay.classList.remove('visible');
            console.log('Video playing automatically:', video.currentSrc);
          })
          .catch(error => {
            // Autoplay failed - show overlay
            console.error('Autoplay prevented:', error, video.currentSrc);
            overlay.style.display = 'flex';
            overlay.classList.add('visible');
          });
        }
      };
      
      // Attempt play on metadata load or if already ready
      if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
          playVideo();
      } else {
          video.addEventListener('loadedmetadata', playVideo);
          video.addEventListener('canplaythrough', playVideo); // Fallback
      }
      
      // Add click handler to overlay
      overlay.addEventListener('click', function(e) {
        e.stopPropagation();
        video.play()
          .then(() => {
            overlay.style.display = 'none';
            overlay.classList.remove('visible');
          })
          .catch(err => {
            console.error('Still cannot play video after click:', err, video.currentSrc);
          });
      });
      
      // Add click handler to the container, *except* for specific looping videos
      const videoSrc = video.querySelector('source')?.getAttribute('src');
      const isExcludedVideo = container.id === 'quant-video-container' || (videoSrc && (videoSrc.includes('project1.mp4') || videoSrc.includes('project5.mp4')));
      
      if (!isExcludedVideo) {
        container.addEventListener('click', function() {
          if (video.paused) {
            video.play()
              .then(() => {
                  overlay.style.display = 'none';
                  overlay.classList.remove('visible');
              })
              .catch(err => {
                  console.error('Cannot play on container click:', err, video.currentSrc);
                  overlay.style.display = 'flex';
                  overlay.classList.add('visible');
              });
          } else {
            video.pause();
            overlay.style.display = 'flex';
            overlay.classList.add('visible');
          }
        });
      }
    });
    
    // Try to play videos again after user interaction with the page
    const tryPlayVideosAfterInteraction = function() {
      document.querySelectorAll('.project-video').forEach(video => {
        if (video.paused) {
            video.play().catch((err) => { console.warn('Could not play video after interaction:', err, video.currentSrc); });
        }
      });
      // Remove event listeners after first interaction
      document.removeEventListener('click', tryPlayVideosAfterInteraction, { once: true });
      document.removeEventListener('scroll', tryPlayVideosAfterInteraction, { once: true });
      document.removeEventListener('touchstart', tryPlayVideosAfterInteraction, { once: true });
    };
    
    // Add event listeners for user interaction
    document.addEventListener('click', tryPlayVideosAfterInteraction, { once: true });
    document.addEventListener('scroll', tryPlayVideosAfterInteraction, { once: true });
    document.addEventListener('touchstart', tryPlayVideosAfterInteraction, { once: true });

  } else {
    console.warn('No .video-container elements found.');
  }

  // ---- Existing main.js code starts here ----
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Save preference to localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  } else {
      console.warn('#theme-toggle element not found.');
  }

  // Load saved theme preference
  if (
    localStorage.getItem('theme') === 'dark' ||
    (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localStorage.getItem('theme'))
  ) {
    document.body.classList.add('dark-mode');
  }

  // --- ADD INITIAL SECTION DISPLAY LOGIC ---
  // Show initial section based on hash or default to #home
  const initialHash = window.location.hash || '#home';
  const initialSection = document.querySelector(initialHash);
  console.log('Initial Hash:', initialHash);
  console.log('Found Initial Section Element:', initialSection);
  if (initialSection && initialSection.tagName === 'SECTION') {
      console.log('Attempting to activate section:', initialHash);
      document.querySelectorAll('section[id]').forEach(s => s.classList.remove('active')); // Use updated selector
      initialSection.classList.add('active');
      console.log('Classes after activation attempt:', initialSection.classList);
      // Also update nav link
      const initialLink = document.querySelector(`nav a[href="${initialHash}"]`);
      if (initialLink) {
          document.querySelectorAll('nav a').forEach(navLink => navLink.classList.remove('active'));
          initialLink.classList.add('active');
      }
  } else if (document.querySelector('#home')) {
      // Fallback to show #home if hash is invalid or missing
      console.log('Fallback: Activating #home');
      document.querySelectorAll('section[id]').forEach(s => s.classList.remove('active')); // Use updated selector
      const homeSection = document.querySelector('#home');
      homeSection.classList.add('active');
      console.log('Classes after fallback activation attempt:', homeSection.classList);
      const homeLink = document.querySelector('nav a[href="#home"]');
      if (homeLink) {
           document.querySelectorAll('nav a').forEach(navLink => navLink.classList.remove('active'));
           homeLink.classList.add('active');
      }
  }
  // --- END INITIAL SECTION DISPLAY LOGIC ---

  // Check URL hash to navigate to correct section on page load (Scroll part)
  const hash = window.location.hash.substring(1);
  if (hash) {
    // Find the link that corresponds to the hash
    const targetLink = document.querySelector(`nav a[href="#${hash}"]`);
    if (targetLink) {
      // Use a slight delay to ensure layout is stable
      setTimeout(() => {
          // Trigger smooth scroll instead of instant click jump
          const targetSection = document.querySelector(`#${hash}`);
          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 80, 
                  behavior: 'auto' // Use auto for initial load, or smooth if preferred
              });
              // Update active link
              document.querySelectorAll('nav a').forEach(navLink => navLink.classList.remove('active'));
              targetLink.classList.add('active');
          }
      }, 100); 
    }
  }

  // Continuously update orbiting tech items so they remain upright
  function updateTechItems() {
    const orbit = document.querySelector('.orbit');
    if (!orbit) return;

    // Read orbit's current rotation angle from its CSS transform
    const orbitStyles = window.getComputedStyle(orbit);
    const matrix = orbitStyles.transform;
    let orbitAngle = 0;
    if (matrix && matrix !== 'none') {
      try {
          const values = matrix.split('(')[1].split(')')[0].split(',');
          const a = parseFloat(values[0]);
          const b = parseFloat(values[1]);
          orbitAngle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      } catch (e) {
          console.error('Error parsing orbit transform matrix:', e);
      }
    }

    // For each item, counter-rotate so the icon remains upright
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item) => {
      const i = parseInt(item.style.getPropertyValue('--i'));
      const baseAngle = 30 * i; // 12 items * 30° = 360°
      const content = item.querySelector('.content');
      if (content) {
        // Calculate the necessary counter-rotation
        const counterRotation = -(orbitAngle + baseAngle);
        content.style.transform = `rotate(${counterRotation}deg)`;
      }
    });

    requestAnimationFrame(updateTechItems);
  }
  requestAnimationFrame(updateTechItems);

  // Handle window resize for responsive layouts
  window.addEventListener('resize', () => {
    const nav = document.getElementById('nav');
    if (nav && window.innerWidth > 768) {
      nav.classList.remove('show');
    }
  });

  // Hacker Terminal Animation
  const hackerText = document.getElementById('hackerText');
  if (hackerText) {
    const phrases = [
      "> Loading personal data...\n> Machine Learning expertise: Verified\n> Full Stack development skills: Confirmed\n> Neural network optimization: Advanced\n> STATUS: Elite developer profile",
      "> Tracing career path...\n> Education: Dual major in CS and Applied Math\n> Experience: ML Engineer at Foundever\n> Projects: Computer Vision, Real-time detection\n> STATUS: Impressive trajectory",
      "> Analyzing skill matrix...\n> PyTorch, TensorFlow: Expert level\n> Python, JavaScript: Advanced proficiency\n> Docker, Kubernetes: Production ready\n> RESULTS: Versatile technical profile"
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60; // Base typing speed
    let timeoutId = null;
    
    function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        // Deleting text
        hackerText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 30; // Faster when deleting
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          typingSpeed = 1000; // Pause before typing next phrase
        }
      } else {
        // Typing text
        hackerText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        // Randomize typing speed slightly for a more natural feel
        typingSpeed = Math.random() * 50 + 50;
        
        if (currentCharIndex === currentPhrase.length) {
          isDeleting = true;
          typingSpeed = 3000; // Pause before deleting
        }
      }
      
      // Clear previous timeout before setting a new one
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the typing effect with a delay
    timeoutId = setTimeout(typeEffect, 1000);
  } else {
      console.warn('#hackerText element not found.');
  }

  // Achievement placards interaction
  const achievementPlacards = document.querySelectorAll('.achievement-placard');
  if (achievementPlacards.length > 0) {
    achievementPlacards.forEach(placard => {
      const flipCard = function() {
          this.classList.toggle('flipped');
          
          // If this card is now flipped, unflip others
          if (this.classList.contains('flipped')) {
              achievementPlacards.forEach(otherPlacard => {
                  if (otherPlacard !== this && otherPlacard.classList.contains('flipped')) {
                      otherPlacard.classList.remove('flipped');
                  }
              });
          }
      };

      // Handle click events for desktop
      placard.addEventListener('click', flipCard);
      
      // Handle touch events for mobile (use touchend)
      placard.addEventListener('touchend', function(e) {
          // Prevent click event from firing immediately after touch
          e.preventDefault(); 
          flipCard.call(this); // Call the flip function in the context of the placard
      });
    });
  } else {
      console.warn('No .achievement-placard elements found.');
  }

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          const shouldShow = filterValue === 'all' || cardCategory === filterValue;
          
          if (shouldShow) {
              card.classList.remove('hidden');
              // Optionally re-trigger AOS if needed after filtering
              // AOS.refresh(); // Or more targeted refresh
          } else {
              card.classList.add('hidden');
          }
        });
      });
    });
  } else {
      console.warn('No .filter-btn or .project-card elements found for filtering.');
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('nav');
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
      mobileMenuToggle.querySelector('i').classList.toggle('fa-times'); // Toggle close icon
    });

    // Close mobile menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

  } else {
      console.warn('#mobile-menu-toggle or #nav element not found.');
  }

}); // End of the main DOMContentLoaded wrapper

// --- Existing main.js code ends here (potentially)---
// If there was code outside the DOMContentLoaded wrapper, it remains below.
