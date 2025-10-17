// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values and trim whitespace
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Display success message
            alert(`Merci ${name}!\n\nVotre message a été soumis avec succès.\n\nNous vous contacterons à ${email} dans les plus brefs délais.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});
