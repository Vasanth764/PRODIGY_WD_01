document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.purchase-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const watchModel = this.parentElement;
            const price = watchModel.getAttribute('data-price');
            const watchName = watchModel.querySelector('h3').textContent;

            // Basic transaction popup
            alert(`You have selected the ${watchName} for $${price}. Thank you for your purchase!`);
            
            // For a real application, you would integrate with a payment gateway or redirect to a checkout page here.
        });
    });
});
