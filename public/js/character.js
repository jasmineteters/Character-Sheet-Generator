// write logic to save character information on character sheet page.
const newCharacterHandler = async (event) => {
    event.preventDefault();
  
    // const name = document.querySelector('#character-name').value.trim();
    // const character_class = document.querySelector('#class').value.trim();
    // const character_level = document.querySelector('#character-level').value.trim();
    // const background = document.querySelector('#background').value.trim();
    // const ancestry = document.querySelector('#race').value.trim();
    // const alignment = document.querySelector('#alignment').value.trim();
    // const proficiency_bonus = document.querySelector('#proficiency_bonus').value.trim();
    
    // const strength = document.querySelector('#strength').value.trim();
    // const strength_bonus = document.querySelector('#strength_bonus').value.trim();
    // const dexterity = document.querySelector('#dexterity').value.trim();
    // const dexterity_bonus = document.querySelector('#dexterity_bonus').value.trim();
    // const constitution = document.querySelector('#constitution').value.trim();
    // const constitution_bonus = document.querySelector('#constitution_bonus').value.trim();
    // const intelligence = document.querySelector('#intelligence').value.trim();
    // const intelligence_bonus = document.querySelector('#intelligence_bonus').value.trim();
    // const wisdom = document.querySelector('#wisdom').value.trim();
    // const wisdom_bonus = document.querySelector('#wisdom_bonus').value.trim();
    // const charisma = document.querySelector('#charisma').value.trim();
    // const charisma_bonus = document.querySelector('#charisma_bonus').value.trim();
    
    // const armor_class = document.querySelector('#armor_class').value.trim();
    // const initiative = document.querySelector('#initiative').value.trim();
    // const speed = document.querySelector('#speed').value.trim();
    
    // const max_hp = document.querySelector('#max_hp').value.trim();
    // const current_hp = document.querySelector('#current_hp').value.trim();
    // const temp_hp = document.querySelector('#temp_hp').value.trim();
    // const hit_dice_type = document.querySelector('#hit_dice_type').value.trim();
    // const hit_dice_total = document.querySelector('#hit_dice_total').value.trim();
    // const hit_dice_left = document.querySelector('#hit_dice_left').value.trim();
    // const death_save_successes = document.querySelector('#death_save_successes').value.trim();
    // const death_save_failures = document.querySelector('#death_save_failures').value.trim();

    // const str_save = document.querySelector('#str_save').value.trim();
    // const str_save_value = document.querySelector('#str_save_value').value.trim();
    // const dex_save = document.querySelector('#dex_save').value.trim();
    // const dex_save_value = document.querySelector('#dex_save_value').value.trim();
    // const con_save = document.querySelector('#con_save').value.trim();
    // const con_save_value = document.querySelector('#con_save_value').value.trim();
    // const int_save = document.querySelector('#int_save').value.trim();
    // const int_save_value = document.querySelector('#int_save_value').value.trim();
    // const wis_save = document.querySelector('#wis_save').value.trim();
    // const wis_save_value = document.querySelector('#wis_save_value').value.trim();
    // const cha_save = document.querySelector('#cha_save').value.trim();
    // const cha_save_value = document.querySelector('#cha_save_value').value.trim();

    // const acrobatics = document.querySelector('#acrobatics').value.trim();
    // const acrobatics_value = document.querySelector('#acrobatics_value').value.trim();
    // const animal_handling = document.querySelector('#animal_handling').value.trim();
    // const animal_handling_value = document.querySelector('#animal_handling_value').value.trim();
    // const arcana = document.querySelector('#arcana').value.trim();
    // const arcana_value = document.querySelector('#arcana_value').value.trim();
    // const athletics = document.querySelector('#athletics').value.trim();
    // const athletics_value = document.querySelector('#athletics_value').value.trim();
    // const deception = document.querySelector('#deception').value.trim();
    // const deception_value = document.querySelector('#deception_value').value.trim();
    // const history = document.querySelector('#history').value.trim();
    // const history_value = document.querySelector('#history_value').value.trim();
    // const insight = document.querySelector('#insight').value.trim();
    // const insight_value = document.querySelector('#insight_value').value.trim();
    // const intimidation = document.querySelector('#intimidation').value.trim();
    // const intimidation_value = document.querySelector('#intimidation_value').value.trim();
    // const investigation = document.querySelector('#investigation').value.trim();
    // const investigation_value = document.querySelector('#investigation_value').value.trim();
    // const medicine = document.querySelector('#medicine').value.trim();
    // const medicine_value = document.querySelector('#medicine_value').value.trim();
    // const nature = document.querySelector('#nature').value.trim();
    // const nature_value = document.querySelector('#nature_value').value.trim();
    // const perception = document.querySelector('#perception').value.trim();
    // const perception_value = document.querySelector('#perception_value').value.trim();
    // const performance = document.querySelector('#performance').value.trim();
    // const performance_value = document.querySelector('#performance_value').value.trim();
    // const persuasion = document.querySelector('#persuasion').value.trim();
    // const persuasion_value = document.querySelector('#persuasion_value').value.trim();
    // const religion = document.querySelector('#religion').value.trim();
    // const religion_value = document.querySelector('#religion_value').value.trim();
    // const sleight_of_hand = document.querySelector('#sleight_of_hand').value.trim();
    // const sleight_of_hand_value = document.querySelector('#sleight_of_hand_value').value.trim();
    // const stealth = document.querySelector('#stealth').value.trim();
    // const stealth_value = document.querySelector('#stealth_value').value.trim();
    // const survival = document.querySelector('#survival').value.trim();
    // const survival_value = document.querySelector('#survival_value').value.trim();
    
    const info = document.querySelectorAll('div.input')
    console.log(info);

    // if (name  && description) {
    //   const response = await fetch(`/api/post`, {
    //     method: 'POST',
    //     body: JSON.stringify({ 
    //         name, 
    //         character_class,
    //         character_level,
    //         background,
    //         ancestry,
    //         alignment,
    //         proficiency_bonus,

    //         strength,

    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to create post');
    //   }
    // }
  };

  // document
  // .querySelector(".login-form")
  // .addEventListener("submit", loginFormHandler);