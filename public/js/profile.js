// write js logic for profile page



const newCharacterHandler = async (event) => {
  event.preventDefault();
  // const title = document.querySelector("#title-name").value.trim();
  // const body = document.querySelector("#character-body").value.trim();
  

  
    
    const response = await fetch(`/api/character/` , {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
        "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        // document.location.replace("/character/");
        alert("character created")
    } else {
        alert("Failed to create character")
    }

};

  
// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/character/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to delete character");
//     }
//   }
// };

document
  .querySelector(".new-character-button")
  .addEventListener("click", newCharacterHandler);

// document
//   .querySelector(".character-list")
//   .addEventListener("click", delButtonHandler);
