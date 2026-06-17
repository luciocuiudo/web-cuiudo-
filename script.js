function toggleCuriosidade(button) {
  const box = button.nextElementSibling;

  if (box.style.display === "block") {
    box.style.display = "none";
    button.textContent = "Curiosidade técnica";
  } else {
    box.style.display = "block";
    button.textContent = "Ocultar curiosidade";
  }
}

function filterPosts(category) {
  const posts = document.querySelectorAll(".post");

  posts.forEach(post => {
    if (category === "all") {
      post.style.display = "block";
    } else {
      post.style.display = post.classList.contains(category)
        ? "block"
        : "none";
    }
  });
}
