const firstContainer = document.querySelector('.first');

document.querySelectorAll('.time button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Remove any existing form
        const existingForm = document.getElementById('dynamicBookingForm');
        if (existingForm) existingForm.remove();

        // Create the form dynamically
        const form = document.createElement('form');
        form.id = 'dynamicBookingForm';
        form.style.border = '1px solid grey';
        form.style.padding = '10px';
        form.style.marginTop = '10px';
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.gap = '5px';
        form.innerHTML = `
            <h3>Book Slot</h3>
            <input type="text" name="name" placeholder="Enter your name" required>
            <input type="email" name="email" placeholder="Enter your email" required>
            <input type="hidden" name="slotIndex" value="${index}">
            <button type="submit">Confirm Booking</button>
            <button type="button" id="cancelForm">Cancel</button>
        `;

        // Append form in the first container
        firstContainer.appendChild(form);

        // Cancel button removes the form
        document.getElementById('cancelForm').addEventListener('click', () => {
            form.remove();
        });

        // Handle form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const slotIndex = formData.get('slotIndex');

            fetch('/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, slotIndex })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    location.reload();
                } else {
                    alert(data.message);
                }
            });
        });
    });
});

function cancelMeeting(id, slotIndex) {
    fetch('/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, slotIndex })
    }).then(() => location.reload());
}
