let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
search.classList.toggle('active');
menu.classList.remove('active');
}
let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
search.classList.remove('active');
}
//hide menu and search box on scroll
window.onscroll =() =>{
    search.classList.remove('active');
    menu.classList.remove('active');
}

//header
let header= document.querySelector('header');
window.addEventListener('scroll' , ()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

// Google Sign-In functionality
let isLoggedIn = false;

// Initialize Google Sign-In
window.onload = function() {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });
}

// Handle Google Sign-In response
function handleCredentialResponse(response) {
    // Decode the JWT token to get user info
    const responsePayload = decodeJwtResponse(response.credential);
    
    // Update UI with user info
    showUserProfile(responsePayload);
    isLoggedIn = true;
}

// Decode JWT token
function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Show user profile
function showUserProfile(userInfo) {
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('user-profile').style.display = 'flex';
    document.getElementById('profile-img').src = userInfo.picture;
    document.getElementById('user-name').textContent = userInfo.name;
}

// Hide user profile
function hideUserProfile() {
    document.getElementById('login-btn').style.display = 'flex';
    document.getElementById('user-profile').style.display = 'none';
}

// Check login state on page load
window.addEventListener('load', function() {
    checkLoginState();
});

function checkLoginState() {
    const googleUser = localStorage.getItem('googleUser');
    const rememberLogin = localStorage.getItem('rememberLogin');
    
    if (googleUser) {
        const user = JSON.parse(googleUser);
        showUserProfile(user);
    } else if (rememberLogin === 'true') {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            // Show logged in state for remembered user
            showUserProfile({
                name: userEmail.split('@')[0],
                email: userEmail,
                picture: 'https://via.placeholder.com/32x32/d90429/ffffff?text=' + userEmail.charAt(0).toUpperCase()
            });
        }
    }
}

// Login button click handler - now redirects to login page
document.getElementById('login-btn').onclick = (e) => {
    // Let the default link behavior work
    return true;
}

// Logout button click handler
document.getElementById('logout-btn').onclick = () => {
    google.accounts.id.disableAutoSelect();
    hideUserProfile();
    isLoggedIn = false;
    // You can also revoke the token here if needed
}

// Image gallery functionality
var fullImageBox=document.getElementById('fullImageBox');
var fullImage=document.getElementById('fullImag');

function showImage(src){
    fullImageBox.style.display='flex';
    fullImage.src=src;
}

function closeImg(){
    fullImageBox.style.display='none';
}




// Change Hero Car Image with Animation
function changeHeroCarImage(carElement, imageSrc, carName, price) {
    const heroImage = document.getElementById('heroCarImage');
    const priceElement = document.getElementById('carPrice');
    const heroSection = document.querySelector('.hero-image');
    
    // Pause marquee animation temporarily
    const marqueeContent = document.querySelector('.marquee-content');
    marqueeContent.style.animationPlayState = 'paused';
    
    // Add click effect to the clicked car
    carElement.style.transform = 'scale(1.2)';
    carElement.style.transition = 'transform 0.3s ease';
    
    // Add loading effect to hero section
    heroSection.style.transform = 'scale(0.95)';
    heroSection.style.opacity = '0.7';
    heroSection.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
        // Change the hero image
        heroImage.src = imageSrc;
        heroImage.alt = carName;
        
        // Update price
        priceElement.textContent = price;
        
        // Add flash effect
        heroSection.style.filter = 'brightness(1.3)';
        
        setTimeout(() => {
            // Remove flash and restore hero section
            heroSection.style.filter = 'brightness(1)';
            heroSection.style.transform = 'scale(1)';
            heroSection.style.opacity = '1';
            
            // Add success glow effect
            heroSection.style.boxShadow = '0 0 30px rgba(217, 4, 41, 0.4)';
            
            setTimeout(() => {
                heroSection.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
            }, 1000);
            
        }, 200);
        
        // Reset clicked car
        setTimeout(() => {
            carElement.style.transform = 'scale(1)';
            
            // Resume marquee animation
            marqueeContent.style.animationPlayState = 'running';
        }, 500);
        
    }, 300);
    
    // Scroll to hero section smoothly
    document.querySelector('.home').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}

// Hero Image Slider functionality
let currentSlideIndex = 1;

// Function to manually change slides using dots
function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

// Function to show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) currentSlideIndex = 1;
    if (n < 1) currentSlideIndex = slides.length;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[currentSlideIndex - 1]) {
        slides[currentSlideIndex - 1].classList.add('active');
    }
    if (dots[currentSlideIndex - 1]) {
        dots[currentSlideIndex - 1].classList.add('active');
    }
}
// Updated Chat Widget Functions
function startNewConversation() {
    const chatStartScreen = document.getElementById('chatStartScreen');
    const chatConversationScreen = document.getElementById('chatConversationScreen');
    const chatInput = document.getElementById('chatInput');
    
    chatStartScreen.style.display = 'none';
    chatConversationScreen.style.display = 'flex';
    setTimeout(() => {
        if (chatInput) chatInput.focus();
    }, 300);
}

function goBackToStart() {
    const chatStartScreen = document.getElementById('chatStartScreen');
    const chatConversationScreen = document.getElementById('chatConversationScreen');
    const chatMenuDropdown = document.getElementById('chatMenuDropdown');
    
    chatConversationScreen.style.display = 'none';
    chatStartScreen.style.display = 'flex';
    if (chatMenuDropdown) {
        chatMenuDropdown.classList.remove('active');
    }
}

function goHome() {
    const chatWindow = document.getElementById('chatWindow');
    const chatMenuDropdown = document.getElementById('chatMenuDropdown');
    
    chatWindow.classList.remove('active');
    if (chatMenuDropdown) {
        chatMenuDropdown.classList.remove('active');
    }
}

function toggleChatMenu() {
    const chatMenuDropdown = document.getElementById('chatMenuDropdown');
    if (chatMenuDropdown) {
        chatMenuDropdown.classList.toggle('active');
    }
}

// Menu Item Functions
function changeName() {
    const newName = prompt('Enter your name:');
    if (newName) {
        alert('Name changed to: ' + newName);
    }
    toggleChatMenu();
}

function emailTranscript() {
    const email = prompt('Enter your email address:');
    if (email) {
        alert('Chat transcript will be sent to: ' + email);
    }
    toggleChatMenu();
}

function toggleSound() {
    alert('Sound notifications toggled');
    toggleChatMenu();
}

function popOutWidget() {
    alert('Chat widget would open in a new window');
    toggleChatMenu();
}

function addChatToWebsite() {
    alert('Chat widget code would be provided for your website');
    toggleChatMenu();
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const chatMenuDropdown = document.getElementById('chatMenuDropdown');
    const chatMenuBtn = document.querySelector('.chat-menu-btn');
    
    if (chatMenuDropdown && chatMenuBtn) {
        if (!chatMenuDropdown.contains(event.target) && !chatMenuBtn.contains(event.target)) {
            chatMenuDropdown.classList.remove('active');
        }
    }
});
// Simple Chat Toggle Test - UPDATED
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up chat - UPDATED VERSION');
    
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    
    if (chatToggle && chatWindow) {
        console.log('Chat elements found - UPDATED');
        
        chatToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Chat icon clicked - UPDATED');
            
            if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
                chatWindow.style.display = 'flex';
                console.log('Chat opened - UPDATED');
            } else {
                chatWindow.style.display = 'none';
                console.log('Chat closed - UPDATED');
            }
        });
    } else {
        console.log('Chat elements not found - UPDATED:', {
            chatToggle: !!chatToggle,
            chatWindow: !!chatWindow
        });
    }
});

// Chat Functions - UPDATED WITH FULL FUNCTIONALITY
function startNewConversation() {
    console.log('Starting new conversation - UPDATED');
    document.getElementById('chatStartScreen').style.display = 'none';
    document.getElementById('chatConversationScreen').style.display = 'flex';
}

function goBackToStart() {
    console.log('Going back to start - UPDATED');
    document.getElementById('chatConversationScreen').style.display = 'none';
    document.getElementById('chatStartScreen').style.display = 'flex';
    document.getElementById('chatMenuDropdown').style.display = 'none';
}

function goHome() {
    console.log('Going home - UPDATED');
    document.getElementById('chatWindow').style.display = 'none';
}

function toggleChatMenu() {
    console.log('Toggling chat menu - UPDATED');
    const menu = document.getElementById('chatMenuDropdown');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Menu Item Functions with Full Functionality
function changeName() {
    console.log('Change Name clicked');
    toggleChatMenu();
    document.getElementById('changeNameModal').style.display = 'flex';
    document.getElementById('nameInput').focus();
}

function emailTranscript() {
    console.log('Email transcript clicked');
    toggleChatMenu();
    document.getElementById('emailModal').style.display = 'flex';
    document.getElementById('emailInput').focus();
}

function toggleSound() {
    console.log('Sound toggle clicked');
    toggleChatMenu();
    document.getElementById('soundModal').style.display = 'flex';
}

function popOutWidget() {
    console.log('Pop out widget clicked');
    toggleChatMenu();
    document.getElementById('popOutModal').style.display = 'flex';
}

function addChatToWebsite() {
    console.log('Add chat to website clicked');
    toggleChatMenu();
    document.getElementById('addChatModal').style.display = 'flex';
}

// Redirect to Tawk.to
function redirectToTawkTo() {
    console.log('Redirecting to Tawk.to');
    
    // Close modal first
    closeAddChatModal();
    
    // Show loading message
    const loadingDiv = document.createElement('div');
    loadingDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 100001;
        text-align: center;
        font-family: 'Poppins', sans-serif;
    `;
    loadingDiv.innerHTML = `
        <div style="color: #333; font-size: 1.1rem; margin-bottom: 10px;">Redirecting to Tawk.to...</div>
        <div style="color: #666; font-size: 0.9rem;">Please wait</div>
    `;
    document.body.appendChild(loadingDiv);
    
    // Redirect after short delay
    setTimeout(() => {
        window.open('https://www.tawk.to/?utm_source=tawk-messenger&utm_medium=link&utm_campaign=referral&utm_term=5efb15e09e5f6944229192a3', '_blank');
        
        // Remove loading message
        document.body.removeChild(loadingDiv);
        
        // Close chat widget
        setTimeout(() => {
            goHome();
        }, 500);
    }, 1500);
}

// Modal Functions
// Change Name Modal
function saveNameChange() {
    const nameInput = document.getElementById('nameInput');
    const newName = nameInput.value.trim();
    
    if (newName) {
        // Save name to localStorage
        localStorage.setItem('chatUserName', newName);
        
        // Update UI if needed
        console.log('Name saved:', newName);
        
        // Show success message
        alert('Name changed successfully to: ' + newName);
        
        closeChangeNameModal();
    } else {
        alert('Please enter a valid name');
        nameInput.focus();
    }
}

function closeChangeNameModal() {
    document.getElementById('changeNameModal').style.display = 'none';
    document.getElementById('nameInput').value = '';
}

// Email Transcript Modal
function sendEmailTranscript() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
        // Simulate sending email
        console.log('Sending transcript to:', email);
        
        // Show loading state
        const sendBtn = event.target;
        const originalText = sendBtn.textContent;
        sendBtn.textContent = 'Sending...';
        sendBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Chat transcript has been sent to: ' + email);
            sendBtn.textContent = originalText;
            sendBtn.disabled = false;
            closeEmailModal();
        }, 2000);
    } else {
        alert('Please enter a valid email address');
        emailInput.focus();
    }
}

function closeEmailModal() {
    document.getElementById('emailModal').style.display = 'none';
    document.getElementById('emailInput').value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sound Settings Modal
function saveSoundSettings() {
    const messageSound = document.getElementById('messageSound').checked;
    const typingSound = document.getElementById('typingSound').checked;
    const joinSound = document.getElementById('joinSound').checked;
    
    // Save settings to localStorage
    const soundSettings = {
        messageSound,
        typingSound,
        joinSound
    };
    
    localStorage.setItem('chatSoundSettings', JSON.stringify(soundSettings));
    
    console.log('Sound settings saved:', soundSettings);
    alert('Sound settings saved successfully!');
    
    closeSoundModal();
}

function closeSoundModal() {
    document.getElementById('soundModal').style.display = 'none';
}

// Pop Out Widget Modal
function openPopOutWindow() {
    const popOutWindow = window.open(
        window.location.href + '?popup=chat',
        'CarPointChat',
        'width=400,height=600,scrollbars=no,resizable=yes,status=no,toolbar=no,menubar=no'
    );
    
    if (popOutWindow) {
        console.log('Pop-out window opened');
        alert('Chat opened in new window!');
        closePopOutModal();
        
        // Optionally close the current chat
        goHome();
    } else {
        alert('Please allow pop-ups for this website to use this feature');
    }
}

function closePopOutModal() {
    document.getElementById('popOutModal').style.display = 'none';
}

// Add Chat to Website Modal
function copyChatCode() {
    const chatCode = document.getElementById('chatCode');
    chatCode.select();
    chatCode.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        alert('Chat widget code copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy code:', err);
        alert('Failed to copy code. Please select and copy manually.');
    }
}

function closeAddChatModal() {
    document.getElementById('addChatModal').style.display = 'none';
}

// Load saved settings on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved name
    const savedName = localStorage.getItem('chatUserName');
    if (savedName) {
        console.log('Loaded saved name:', savedName);
    }
    
    // Load saved sound settings
    const savedSoundSettings = localStorage.getItem('chatSoundSettings');
    if (savedSoundSettings) {
        const settings = JSON.parse(savedSoundSettings);
        document.getElementById('messageSound').checked = settings.messageSound;
        document.getElementById('typingSound').checked = settings.typingSound;
        document.getElementById('joinSound').checked = settings.joinSound;
        console.log('Loaded sound settings:', settings);
    }
    
    // Close modals when clicking outside
    document.addEventListener('click', function(event) {
        const modals = ['changeNameModal', 'emailModal', 'soundModal', 'popOutModal', 'addChatModal'];
        
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal && event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});