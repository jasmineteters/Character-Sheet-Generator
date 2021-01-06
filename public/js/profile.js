
const notePadHandler = async (event) => {
  event.preventDefault();
  const notePad = document.querySelector('#notepad').value.trim();

  if (notePad) {
    const response = await fetch(`/api/users/notes`, {
      method: 'POST',
      body: JSON.stringify({ notePad }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('failed to save notes');
    }
  }
};

document.querySelector("#note-save").addEventListener("click", notePadHandler)
