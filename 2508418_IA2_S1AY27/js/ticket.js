document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the saved data
    const storedData = localStorage.getItem('codingConfRegistration');
    
    // If no data exists, bounce them back to the home page
    if (!storedData) {
        window.location.href = 'index.html';
        return; 
    }
    
    // 2. Parse the data and generate the ticket
    try {
        const registrationData = JSON.parse(storedData);
        
        // Get just the first name for the H1 greeting
        const firstName = registrationData.fullName.split(' ')[0];
        document.getElementById('displayFirstName').textContent = firstName;


        document.getElementById('displayEmail').textContent = registrationData.email;

        // Inject data into the glass ticket
        document.getElementById('displayFullName').textContent = registrationData.fullName;
        document.getElementById('displayGithub').textContent = '@' + registrationData.github;
        document.getElementById('displayAvatar').src = registrationData.avatar;
        
        // Generate a random ticket number
        const randomTicketNum = Math.floor(10000 + Math.random() * 90000);
        document.getElementById('displayTicketNum').textContent = randomTicketNum;
        
    } catch (error) {
        localStorage.removeItem('codingConfRegistration');
        window.location.href = 'index.html';
    }
    
    // 3. Make the print button work
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
         window.print();
        });
    }
});