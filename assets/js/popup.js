function showPopup() {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

function hidePopup() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

function submitOrder() {
        // Add your logic to handle the order submission
        alert('Order submitted successfully!');
        hidePopup();
}