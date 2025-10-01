function showSidebar() {
    document.querySelector('.sidebar').classList.add('show');
}

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('show');
}



//Highlight menu button for current page location
function updateActiveLink() {
    // Get all section elements on the page
    const sections = document.querySelectorAll('section');
    // Get all navigation menu links
    const navLinks = document.querySelectorAll('.nav-menu a');
    // Variable to store the ID of the currently active section
    let current = '';
    
    // Loop through each section to check which one is currently in view
    sections.forEach(section => {
        // Get the distance from the top of the document to the top of this section
        const sectionTop = section.offsetTop;
        // Check if current scroll position is within 200px above the section top
        // This means the section is coming into view or is in view
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.clientHeight) { 
            // If condition is true, set this section as the current active section
            current = section.getAttribute('id');
        }
    });

    // Loop through all navigation links to update their active state
    navLinks.forEach(link => {
        // Remove 'active' class from all links first
        link.classList.remove('active');
        // Check if this link's href matches the current active section ID
        if (link.getAttribute('href') === `#${current}`) {
            // If it matches, add 'active' class to highlight this link
            link.classList.add('active');
        }
    });
}
// Listen for scroll events and run updateActiveLink function when user scrolls
window.addEventListener('scroll', updateActiveLink);
// Also run the function when page loads to set initial active state
window.addEventListener('load', updateActiveLink);



//Projects More Section

//WordMatrix
function showWM() {
    document.getElementById('blurOverlay').style.display = 'block';
    document.getElementById('wm-more').style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Remove the off class first
    document.getElementById('blurOverlay').classList.remove('tv-off');
    document.getElementById('wm-more').classList.remove('tv-off');

    setTimeout(function() {
        document.getElementById('blurOverlay').classList.add('tv-on');
        document.getElementById('wm-more').classList.add('tv-on');
    }, 10);
}
function hideWM(){
    // Remove on class and add off class for animation
    document.getElementById('blurOverlay').classList.remove('tv-on');
    document.getElementById('wm-more').classList.remove('tv-on');

    document.getElementById('wm-more').classList.add('tv-off');
    document.getElementById('blurOverlay').classList.add('tv-off');
    
    setTimeout(function() {
        document.getElementById('blurOverlay').style.display = 'none';
        document.getElementById('wm-more').style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 500);
    
}

//SCAI
function showScai() {
    document.getElementById('blurOverlay').style.display = 'block';
    document.getElementById('scai-more').style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Remove the off class first
    document.getElementById('blurOverlay').classList.remove('tv-off');
    document.getElementById('scai-more').classList.remove('tv-off');

    setTimeout(function() {
        document.getElementById('blurOverlay').classList.add('tv-on');
        document.getElementById('scai-more').classList.add('tv-on');
    }, 10);
}
function hideScai(){
    // Remove on class and add off class for animation
    document.getElementById('blurOverlay').classList.remove('tv-on');
    document.getElementById('scai-more').classList.remove('tv-on');

    document.getElementById('scai-more').classList.add('tv-off');
    document.getElementById('blurOverlay').classList.add('tv-off');
    
    setTimeout(function() {
        document.getElementById('blurOverlay').style.display = 'none';
        document.getElementById('scai-more').style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 500);
    
}
document.getElementById('closeBtn').addEventListener('click', hideScai);
document.getElementById('closeBtn').addEventListener('touchend', function(e) {
    e.preventDefault();  // Prevent double-firing
    hideScai();
});


