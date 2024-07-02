document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blog-list');

    axios.get('/blogs')
        .then(response => {
            const blogs = response.data;
            blogs.forEach(blog => {
                const li = document.createElement('li');
                li.textContent = blog.title;
                li.classList.add('blog-item');
                
                // Add click event to expand blog content
                li.addEventListener('click', () => {
                    const contentDiv = li.querySelector('.content');
                    if (!contentDiv) {
                        const newContentDiv = document.createElement('div');
                        newContentDiv.classList.add('content');
                        newContentDiv.innerHTML = `
                            <p><strong>Author:</strong> ${blog.author_name}</p>
                            <p>${blog.content}</p>
                            <h4>Comments</h4>
                            <ul class="comments"></ul>
                            <form class="comment-form">
                                <label for="comment">Add a comment:</label>
                                <textarea name="comment" rows="2" required></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        `;
                        li.appendChild(newContentDiv);

                        // Fetch and display comments
                        axios.get(`/comments?blog_id=${blog.blog_id}`)
                            .then(response => {
                                const comments = response.data;
                                const commentsList = newContentDiv.querySelector('.comments');
                                comments.forEach(comment => {
                                    const commentLi = document.createElement('li');
                                    commentLi.textContent = comment.comment_text;
                                    
                                    // Add delete button to each comment
                                    const deleteButton = document.createElement('button');
                                    deleteButton.textContent = 'Delete';
                                    deleteButton.addEventListener('click', () => {
                                        axios.post('/delete-comment', { comment_id: comment.comment_id })
                                            .then(() => {
                                                commentsList.removeChild(commentLi);
                                            })
                                            .catch(error => {
                                                console.error('Error deleting comment:', error);
                                            });
                                    });

                                    commentLi.appendChild(deleteButton);
                                    commentsList.appendChild(commentLi);
                                });
                            })
                            .catch(error => {
                                console.error('Error fetching comments:', error);
                            });

                        // Handle comment form submission
                        const commentForm = newContentDiv.querySelector('.comment-form');
                        commentForm.addEventListener('submit', (e) => {
                            e.preventDefault();
                            const commentText = commentForm.querySelector('textarea').value;
                            axios.post('/add-comment', { blog_id: blog.blog_id, comment_text: commentText })
                                .then(response => {
                                    // Refresh the page to show the new comment with its ID
                                    window.location.reload();
                                })
                                .catch(error => {
                                    console.error('Error adding comment:', error);
                                });
                        });
                    }
                });

                blogList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching blogs:', error);
        });
});
