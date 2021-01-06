


  const saveButton = document.querySelector( '.save-button' )
  const characterName = document.querySelector( '#character-name' ).value.trim();
  console.log("name" + characterName);
  saveButton.addEventListener( 'click', saveButtonHandler )
  async function saveButtonHandler()  {
    console.log("im here")
    // if ( characterName ) {
      const response = await fetch( `/api/character/`, {
        method: 'POST',
        body: JSON.stringify( {
          name: "bob"

        } ),
        headers: {
          'Content-Type': 'application/json',
        },
      } );
    // }
  }
