async function fetchReviews() {
    const response = await fetch('https://manti.vendicated.dev/api/reviewdb/users/834293703333642240/reviews');
    const data = await response.json();

    if (data.success) {
        const reviewsContainer = document.getElementById('reviews');
        data.reviews
            .filter(review => review.id !== 0)
            .forEach(review => {
                const card = document.createElement('div');
                card.className = 'review-card';

                card.innerHTML = `
                    <div class="review-header">
                        <img src="${review.sender.profilePhoto}" alt="${review.sender.username}" class="profile-photo">
                        <div class="user-info">
                            <div class="name-and-badges">
                                <h2>${review.sender.username}</h2>
                                <div class="badges">
                                    ${review.sender.badges.map(badge => `
                                        <a href="${badge.redirectURL}" target="_blank">
                                            <img src="${badge.icon}" alt="${badge.name}" title="${badge.description}" class="badge">
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p class="comment">${review.comment}</p>
                    <span class="timestamp">${new Date(review.timestamp * 1000).toLocaleString()}</span>
                `;

                reviewsContainer.appendChild(card);
            });
    }
}

fetchReviews();