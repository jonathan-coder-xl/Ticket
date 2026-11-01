document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stops the page from refreshing
            
            // 1. Grab the values the user typed in
            const nameValue = document.getElementById('fullName').value.trim();
            const emailValue = document.getElementById('email').value.trim();
            let githubValue = document.getElementById('github').value.trim();
            const avatarFile = document.getElementById('avatar').files[0];
            
            // Clean up GitHub handle if they typed the @ symbol
            if (githubValue.startsWith('@')) {
                githubValue = githubValue.substring(1);
            }
            
            // 2. Read the image file and save everything
            if (nameValue && emailValue && githubValue && avatarFile) {
                const reader = new FileReader();
                
                reader.onload = function(event) {
                    const avatarDataUrl = event.target.result;
                    
                    // Package the data
                    const registrationData = {
                        fullName: nameValue,
                        email: emailValue,
                        github: githubValue,
                        avatar: avatarDataUrl
                    };
                    
                    // Save to local storage
                    localStorage.setItem('codingConfRegistration', JSON.stringify(registrationData));
                    
                    // REDIRECT TO TICKET PAGE
                    window.location.href = 'ticket.html';
                };
                
                reader.readAsDataURL(avatarFile);
            } else {
                alert("Please fill out all fields and upload an image.");
            }
        });
    }
});