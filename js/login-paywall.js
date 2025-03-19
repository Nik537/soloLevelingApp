// Paywall implementation for Solo Leveling Workout App

// Firebase configuration
const firebaseConfig = {
  // TODO: Replace with your Firebase config
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

// Main initialization function
function initPaywall() {
  console.log('Initializing paywall');
  
  // Check if user is authenticated
  const userEmail = localStorage.getItem('paidUserEmail');
  const accessToken = localStorage.getItem('accessToken');
  
  if (!userEmail || !accessToken) {
    console.log('No authentication found, showing paywall');
    // Not authenticated, show paywall
    showPaywall();
  } else {
    console.log('Authentication found, validating user:', userEmail);
    // Validate token (in a real implementation, this would verify with Firebase)
    validateUser(userEmail, accessToken);
  }
}

// Display the paywall overlay
function showPaywall() {
  // Hide workout content
  document.querySelector('.container').style.display = 'none';
  
  // Create and show paywall overlay
  const paywall = document.createElement('div');
  paywall.className = 'paywall-container';
  paywall.innerHTML = `
    <div class="paywall-content">
      <h2>Solo Leveling Workout Program</h2>
      <p>Get access to the complete 6-month progressive workout program to reach your fitness goals.</p>
      <p class="price">One-time payment: <strong>$4.99</strong></p>
      
      <div class="payment-options">
        <button id="payWithStripe" class="payment-button stripe">Pay with Card</button>
        <button id="payWithPaypal" class="payment-button paypal">Pay with PayPal</button>
      </div>
      
      <div class="demo-controls">
        <p>Demo mode - choose an option:</p>
        <button id="demoPayment" class="demo-button">Simulate Successful Payment</button>
      </div>
      
      <div id="loginForm">
        <p>Already purchased? Enter your email to login:</p>
        <input type="email" id="userEmail" placeholder="Your email" class="email-input">
        <button id="loginButton" class="login-button">Login</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(paywall);
  
  // Add event listeners for payment buttons
  document.getElementById('payWithStripe').addEventListener('click', handleStripePayment);
  document.getElementById('payWithPaypal').addEventListener('click', handlePaypalPayment);
  document.getElementById('loginButton').addEventListener('click', handleLogin);
  document.getElementById('demoPayment').addEventListener('click', handleDemoPayment);
}

// Handle Stripe payment (simplified for demo)
function handleStripePayment() {
  console.log('Stripe payment clicked');
  alert('In a real implementation, this would redirect to Stripe payment page.');
  
  // For demo purposes, prompt for email
  const email = prompt('Enter your email to simulate payment:');
  if (email && email.includes('@')) {
    processSuccessfulPayment(email);
  } else {
    alert('Please enter a valid email address.');
  }
}

// Handle PayPal payment (simplified for demo)
function handlePaypalPayment() {
  console.log('PayPal payment clicked');
  alert('In a real implementation, this would redirect to PayPal payment page.');
  
  // For demo purposes, prompt for email
  const email = prompt('Enter your email to simulate payment:');
  if (email && email.includes('@')) {
    processSuccessfulPayment(email);
  } else {
    alert('Please enter a valid email address.');
  }
}

// Handle login attempt
function handleLogin() {
  const emailInput = document.getElementById('userEmail');
  const email = emailInput.value.trim();
  
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  
  console.log('Login attempt with email:', email);
  
  // First check local storage for quick login
  const storedEmail = localStorage.getItem('paidUserEmail');
  
  if (storedEmail === email) {
    console.log('Login successful from localStorage');
    restoreAccess(email);
    return;
  }
  
  // If not found in localStorage, check Firestore
  try {
    const db = firebase.firestore();
    
    // Show loading message
    emailInput.disabled = true;
    document.getElementById('loginButton').disabled = true;
    document.getElementById('loginButton').textContent = 'Checking...';
    
    // Check if email exists in subscribers collection
    db.collection('subscribers').doc(email).get()
      .then((doc) => {
        if (doc.exists && doc.data().isActive) {
          console.log('Login successful from Firestore');
          // Store in localStorage for future quick login
          const accessToken = generateToken(email);
          localStorage.setItem('paidUserEmail', email);
          localStorage.setItem('accessToken', accessToken);
          restoreAccess(email);
        } else {
          alert('This email is not registered or the subscription is inactive. Please purchase access first.');
        }
      })
      .catch((error) => {
        console.error('Error checking subscription status:', error);
        alert('Error checking subscription. Please try again later.');
      })
      .finally(() => {
        // Reset UI
        emailInput.disabled = false;
        document.getElementById('loginButton').disabled = false;
        document.getElementById('loginButton').textContent = 'Login';
      });
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    alert('Error checking subscription. Please try again later.');
    
    // Reset UI
    emailInput.disabled = false;
    document.getElementById('loginButton').disabled = false;
    document.getElementById('loginButton').textContent = 'Login';
  }
}

// Demo function to simulate payment
function handleDemoPayment() {
  const email = prompt('Enter your email to simulate payment:');
  if (email && email.includes('@')) {
    processSuccessfulPayment(email);
  } else {
    alert('Please enter a valid email address.');
  }
}

// Process successful payment
function processSuccessfulPayment(email) {
  console.log('Processing successful payment for:', email);
  
  // In production, generate this token server-side with proper encryption
  // This is a simplified version for demo purposes
  const accessToken = generateToken(email);
  
  // Store authentication data locally
  localStorage.setItem('paidUserEmail', email);
  localStorage.setItem('accessToken', accessToken);
  
  // Store email in Firebase Firestore
  storeEmailInFirebase(email);
  
  // Remove paywall and show content
  document.querySelector('.paywall-container').remove();
  document.querySelector('.container').style.display = 'block';
  
  alert(`Thank you for your purchase! Your access has been granted to ${email}.`);
}

// Store email in Firebase Firestore for the email list
function storeEmailInFirebase(email) {
  try {
    // Get Firestore database
    const db = firebase.firestore();
    
    // Add the email to a 'subscribers' collection
    db.collection('subscribers').doc(email).set({
      email: email,
      subscriptionDate: new Date(),
      paymentStatus: 'completed',
      isActive: true
    })
    .then(() => {
      console.log('Email successfully stored in Firestore:', email);
    })
    .catch((error) => {
      console.error('Error storing email in Firestore:', error);
    });
  } catch (error) {
    console.error('Error accessing Firestore:', error);
  }
}

// Validate user token (simplified for demo)
function validateUser(email, token) {
  console.log('Validating user:', email);
  
  // In a real implementation, this would verify the token with Firebase
  // For demo purposes, we'll just check if the token format looks right
  if (token && token.length > 20 && token.includes(btoa(email).substring(0, 5))) {
    console.log('Token validation successful');
    restoreAccess(email);
  } else {
    console.log('Token validation failed');
    showPaywall();
  }
}

// Restore access after successful authentication
function restoreAccess(email) {
  console.log('Restoring access for:', email);
  
  // Ensure any paywall is removed
  const paywallElement = document.querySelector('.paywall-container');
  if (paywallElement) {
    paywallElement.remove();
  }
  
  // Show the main content
  document.querySelector('.container').style.display = 'block';
}

// Generate a simple token (for demo only)
function generateToken(email) {
  // This is a very simplified token generation
  // In production, use a proper JWT or authentication system
  const timestamp = new Date().getTime();
  const randomPart = Math.random().toString(36).substring(2, 10);
  const emailPart = btoa(email).substring(0, 10);
  
  return `${emailPart}_${timestamp}_${randomPart}`;
}

// Logout function
function handleLogout() {
  console.log('Logging out user');
  
  // Clear stored authentication data
  localStorage.removeItem('paidUserEmail');
  localStorage.removeItem('accessToken');
  
  // Show confirmation
  alert('You have been logged out successfully.');
  
  // Reload the page to show the paywall
  window.location.reload();
}

// Update user email display in the footer
function updateUserDisplay() {
  const userEmailDisplay = document.getElementById('userEmailDisplay');
  const logoutButton = document.getElementById('logoutButton');
  const email = localStorage.getItem('paidUserEmail');
  
  if (userEmailDisplay && email) {
    userEmailDisplay.textContent = email;
    
    // Show logout button
    if (logoutButton) {
      logoutButton.style.display = 'inline-block';
      logoutButton.addEventListener('click', handleLogout);
    }
  } else {
    // Hide logout section if not logged in
    const accountSection = document.querySelector('.account-section');
    if (accountSection) {
      accountSection.style.display = 'none';
    }
  }
}

// Initialize everything on page load
function initializeApp() {
  initPaywall();
  
  // Once the authentication check is done, update user display
  setTimeout(updateUserDisplay, 500);
}

// Listen for page load
document.addEventListener('DOMContentLoaded', initializeApp);
