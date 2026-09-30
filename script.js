document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    const comingSoonMsg = document.getElementById('comingSoonMsg');

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Show the coming soon message below the button
        comingSoonMsg.classList.add('visible');
        
        // Show a popup alert to the user
        alert('Thank you for your interest! The app is currently under development and will be available on the Play Store soon.');
        
        // Hide the inline message after 3 seconds
        setTimeout(() => {
            comingSoonMsg.classList.remove('visible');
        }, 3000);
    });
});
