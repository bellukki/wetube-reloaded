const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const delComment = document.querySelectorAll(".delComment");
const videoId = videoContainer.dataset.id;

const handleDelete = async (event) => {
  const comment = event.target.parentElement;
  const commentId = comment.dataset.id;
  console.log(commentId);
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ commentId }),
  });
  if (response.status === 200) {
    comment.remove();
  }
};

const addComment = (text, id, user) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const owner = document.createElement("span");
  owner.innerText = `${user} : `;
  const span = document.createElement("span");
  span.innerText = ` ${text.replace(/\n/g, "")}`;
  const delBtn = document.createElement("i");
  delBtn.className = "fas fa-xmark";
  delBtn.addEventListener("click", handleDelete);
  newComment.appendChild(owner);
  newComment.appendChild(span);
  newComment.appendChild(delBtn);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId, userId } = await response.json();
    addComment(text, newCommentId, userId);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
  delComment.forEach((btn) => {
    btn.addEventListener("click", handleDelete);
  });
}
