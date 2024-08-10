// Get all reply links
const replyLinks = document.querySelectorAll('.reply-link');

// Track the side for alternating replies
let alternateSide = 'left';

// Add event listener to each reply link
replyLinks.forEach(replyLink => {
    replyLink.addEventListener('click', (event) => {
        event.preventDefault();
        const commentContent = event.target.parentElement;

        const replyDiv = document.createElement('div');
        replyDiv.className = `reply-container ${alternateSide}`;
        replyDiv.innerHTML = `
            <textarea class="reply-text" placeholder="Write a reply..."></textarea>
            <button class="submit-reply">Submit</button>
        `;
        commentContent.appendChild(replyDiv);

        // Toggle the side for the next reply
        alternateSide = alternateSide === 'left' ? 'right' : 'left';

        // Add event listener to the submit button
        const submitButton = replyDiv.querySelector('.submit-reply');
        submitButton.addEventListener('click', () => {
            const replyText = replyDiv.querySelector('.reply-text').value;
            if (replyText.trim() !== '') {
                const reply = document.createElement('div');
                reply.className = `reply ${alternateSide}`;
                reply.innerHTML = `<p>${replyText}</p>`;
                replyDiv.insertAdjacentElement('afterend', reply);
                replyDiv.remove(); // Remove reply container
            }
        });
    });
});
