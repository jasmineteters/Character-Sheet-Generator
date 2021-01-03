const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#character-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };


  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#ancestry').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };


  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#alignment').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#player-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#level').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#strength-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#strength-mod').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#dexterity').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#dexterity-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#dexterity-mod').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#constitution-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#constitution-mod').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#intelligence-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#intelligence-mod').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#wisdom-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#wisdom-mod').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#charisma-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#charisma-mod').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#armor-class').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#initiative').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#speed').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#current-hp').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#max-hp').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#hit-dice-total').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#bottomc1').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#bottomc2').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#bottomc3').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#inspiration').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#passive-wisdom').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#strength-save-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#strength-save-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#dexterity-save-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#dexterity-save-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#constituion-save-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#constitution-save-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#intelligence-save-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#intelligence-save-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#wisdom-save-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#wisdom-save-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#charisma-save-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#charisma-save-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#acrobatics-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#acrobatics-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#animal-handling-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#animal-handling-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#arcana-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#arcana-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#athletics-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#arcana-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#deception-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#deception-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#history-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#history-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#insight-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#insight-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#intimidation-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#intimidation-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#investigation-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#investigation-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#medicine-proficency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#medicine-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#nature-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#nature-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#perception-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#perception-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#performance-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#performance-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#persuasion-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#persuasion-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#religion-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#religion-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#slight-of-hand-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#slight-of-hand-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#stealth-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#stealth-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#survival-proficiency').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#survival-stat').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#attack1-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#strength1').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#damage1').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#attack2-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#strength2').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#damage2').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#attack3-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#strength3').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#damage3').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#spell1').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#spell2').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#spell3').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#spell4').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#spell5').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#personality-traits').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#ideals').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#bonds').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#flaws').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#equipment').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#other-proficiencies-and-languages').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#features-and-traits').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name  && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);

