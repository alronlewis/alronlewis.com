let currentIndex = 0; // Keep track of the current post

function rotatePosts() {
    const posts = document.querySelectorAll('.post'); // Get all posts
    const totalPosts = posts.length;

    // Hide all posts first
    posts.forEach(post => {
        post.style.display = 'none';
    });

    // Show the current set of posts
    for (let i = 0; i < 3; i++) {
        if (posts[(currentIndex + i) % totalPosts]) {
            posts[(currentIndex + i) % totalPosts].style.display = 'block';
        }
    }

    // Update the index for the next rotation
    currentIndex = (currentIndex + 3) % totalPosts;
}

// Rotate posts every 10 seconds
setInterval(rotatePosts, 10000); // 10,000 ms = 10 seconds

// Initial call to display the first set of posts
rotatePosts();