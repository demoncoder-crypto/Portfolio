// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save preference to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme preference
if (
  localStorage.getItem('theme') === 'dark' ||
  (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localStorage.getItem('theme'))
) {
  document.body.classList.add('dark-mode');
}

// Navigation
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    // Update active link
    navLinks.forEach((navLink) => navLink.classList.remove('active'));
    link.classList.add('active');

    // Show target section
    sections.forEach((section) => {
      section.classList.remove('active');
      if (section.id === targetId) {
        section.classList.add('active');
      }
    });

    // Close mobile menu if open
    document.getElementById('nav').classList.remove('show');

    // Save current section to URL hash
    window.location.hash = targetId;
  });
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
mobileMenuToggle.addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('show');
});

// Check URL hash to navigate to correct section on page load
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    // Find the link that corresponds to the hash
    const targetLink = document.querySelector(`nav a[href="#${hash}"]`);
    if (targetLink) {
      // Trigger a click on that link
      targetLink.click();
    }
  }
});

// Animate skill bars (when #experience becomes visible)
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = '0';

    setTimeout(() => {
      bar.style.transition = 'width 1s ease';
      bar.style.width = width;
    }, 100);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'experience') {
          animateSkillBars();
        }
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Continuously update orbiting tech items so they remain upright
function updateTechItems() {
  const orbit = document.querySelector('.orbit');
  if (!orbit) return;

  // Read orbit's current rotation angle from its CSS transform
  const orbitStyles = window.getComputedStyle(orbit);
  const matrix = orbitStyles.transform;
  let orbitAngle = 0;
  if (matrix && matrix !== 'none') {
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    orbitAngle = Math.atan2(b, a) * (180 / Math.PI);
  }

  // For each item, counter-rotate so the icon remains upright
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach((item) => {
    const i = parseInt(item.style.getPropertyValue('--i'));
    const baseAngle = 30 * i; // 12 items * 30° = 360°
    const content = item.querySelector('.content');
    if (content) {
      // Just negate (orbitAngle + baseAngle)
      content.style.transform = `rotate(${-orbitAngle - baseAngle}deg)`;
    }
  });

  requestAnimationFrame(updateTechItems);
}

requestAnimationFrame(updateTechItems);

// Handle window resize for responsive layouts
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.getElementById('nav').classList.remove('show');
  }
});

// Hacker Terminal Animation
document.addEventListener('DOMContentLoaded', function() {
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
      
      setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the typing effect with a delay
    setTimeout(typeEffect, 1000);
  }
});

// Achievement placards interaction
document.addEventListener('DOMContentLoaded', function() {
  const achievementPlacards = document.querySelectorAll('.achievement-placard');
  
  achievementPlacards.forEach(placard => {
    // Handle click events for desktop
    placard.addEventListener('click', function() {
      this.classList.toggle('flipped');
      
      // If this card is now flipped, unflip others
      if (this.classList.contains('flipped')) {
        achievementPlacards.forEach(otherPlacard => {
          if (otherPlacard !== this && otherPlacard.classList.contains('flipped')) {
            otherPlacard.classList.remove('flipped');
          }
        });
      }
    });
    
    // Handle touch events for mobile
    placard.addEventListener('touchend', function(e) {
      e.preventDefault(); // Prevent default touch behavior
      this.classList.toggle('flipped');
      
      // If this card is now flipped, unflip others
      if (this.classList.contains('flipped')) {
        achievementPlacards.forEach(otherPlacard => {
          if (otherPlacard !== this && otherPlacard.classList.contains('flipped')) {
            otherPlacard.classList.remove('flipped');
          }
        });
      }
    });
  });
});

// Project filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        // First remove the hidden class from all cards
        card.classList.remove('hidden');
        
        // If filter is not 'all' and card doesn't match the filter, hide it
        if (filterValue !== 'all' && card.getAttribute('data-category') !== filterValue) {
          card.classList.add('hidden');
        }
      });
      
      // Refresh AOS animations for newly visible items
      if (typeof AOS !== 'undefined') {
        setTimeout(() => {
          AOS.refresh();
        }, 500);
      }
    });
  });
});

// Horizontal scrolling for projects
document.addEventListener('DOMContentLoaded', function() {
  const projectsGrid = document.querySelector('.projects-grid');
  const scrollDots = document.querySelectorAll('.scroll-dot');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (!projectsGrid || !scrollDots.length || !projectCards.length) return;
  
  // Calculate which project is most visible
  function updateActiveScrollDot() {
    const containerRect = projectsGrid.getBoundingClientRect();
    const containerStart = containerRect.left;
    const containerCenter = containerStart + containerRect.width / 2;
    
    // Find the card whose center is closest to the container's center
    let closestCardIndex = 0;
    let closestDistance = Infinity;
    
    projectCards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestCardIndex = index;
      }
    });
    
    // Update active dot
    scrollDots.forEach((dot, index) => {
      if (index === closestCardIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // Update dots when scrolling
  projectsGrid.addEventListener('scroll', updateActiveScrollDot);
  
  // Click on dots to scroll to corresponding project
  scrollDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (projectCards[index]) {
        projectCards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
        
        // Update active dot immediately for better UX
        scrollDots.forEach((d) => d.classList.remove('active'));
        dot.classList.add('active');
      }
    });
  });
  
  // Initial update
  updateActiveScrollDot();
  
  // Also update on window resize
  window.addEventListener('resize', updateActiveScrollDot);
});
