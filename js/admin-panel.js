// Admin panel for Solo Leveling Workout App
// This file provides functionality to view and export the subscriber list

// Check if user is authorized to access admin features
function checkAdminAccess() {
  const adminPasscode = prompt('Enter admin passcode:');
  
  // You should change this to a more secure solution in production
  // For demo purposes, we use a simple passcode
  if (adminPasscode === 'admin123') {
    return true;
  } else {
    alert('Invalid passcode. Access denied.');
    window.location.href = 'index.html';
    return false;
  }
}

// Load subscriber list from Firestore
function loadSubscriberList() {
  try {
    const db = firebase.firestore();
    const subscribersList = document.getElementById('subscribersList');
    const loadingIndicator = document.getElementById('loadingIndicator');
    
    if (!subscribersList || !loadingIndicator) {
      console.error('Required DOM elements not found');
      return;
    }
    
    // Show loading indicator
    loadingIndicator.style.display = 'block';
    subscribersList.innerHTML = '';
    
    // Get all subscribers
    db.collection('subscribers')
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          subscribersList.innerHTML = '<tr><td colspan="3">No subscribers found</td></tr>';
          return;
        }
        
        // Build subscriber table
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const row = document.createElement('tr');
          
          // Convert timestamp to readable date
          let subscriptionDate = 'N/A';
          if (data.subscriptionDate) {
            // Handle both Firestore Timestamp and Date objects
            if (data.subscriptionDate.toDate) {
              subscriptionDate = data.subscriptionDate.toDate().toLocaleDateString();
            } else {
              subscriptionDate = new Date(data.subscriptionDate).toLocaleDateString();
            }
          }
          
          row.innerHTML = `
            <td>${data.email}</td>
            <td>${subscriptionDate}</td>
            <td>${data.isActive ? 'Active' : 'Inactive'}</td>
          `;
          
          subscribersList.appendChild(row);
        });
      })
      .catch((error) => {
        console.error('Error loading subscribers:', error);
        subscribersList.innerHTML = '<tr><td colspan="3">Error loading subscribers</td></tr>';
      })
      .finally(() => {
        loadingIndicator.style.display = 'none';
        updateSubscriberCount();
      });
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    alert('Error accessing database. Please try again later.');
  }
}

// Update subscriber count
function updateSubscriberCount() {
  const db = firebase.firestore();
  const subscriberCount = document.getElementById('subscriberCount');
  
  if (!subscriberCount) return;
  
  db.collection('subscribers')
    .get()
    .then((querySnapshot) => {
      subscriberCount.textContent = querySnapshot.size;
    })
    .catch((error) => {
      console.error('Error counting subscribers:', error);
      subscriberCount.textContent = '?';
    });
}

// Export subscriber list as CSV
function exportSubscriberList() {
  try {
    const db = firebase.firestore();
    
    db.collection('subscribers')
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          alert('No subscribers to export');
          return;
        }
        
        // Create CSV content
        let csvContent = 'Email,Subscription Date,Status\n';
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          
          // Convert timestamp to readable date
          let subscriptionDate = 'N/A';
          if (data.subscriptionDate) {
            if (data.subscriptionDate.toDate) {
              subscriptionDate = data.subscriptionDate.toDate().toLocaleDateString();
            } else {
              subscriptionDate = new Date(data.subscriptionDate).toLocaleDateString();
            }
          }
          
          // Add row to CSV content
          csvContent += `${data.email},${subscriptionDate},${data.isActive ? 'Active' : 'Inactive'}\n`;
        });
        
        // Create download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        link.setAttribute('href', url);
        link.setAttribute('download', `solo-leveling-subscribers-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error exporting subscribers:', error);
        alert('Error exporting subscribers. Please try again later.');
      });
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    alert('Error accessing database. Please try again later.');
  }
}

// Initialize the admin panel
function initAdminPanel() {
  if (!checkAdminAccess()) {
    return;
  }
  
  console.log('Initializing admin panel');
  
  // Add event listeners
  document.getElementById('refreshButton')?.addEventListener('click', loadSubscriberList);
  document.getElementById('exportButton')?.addEventListener('click', exportSubscriberList);
  
  // Load data
  loadSubscriberList();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initAdminPanel);