const saveButton = document.querySelector('.save-button');

saveButton.addEventListener('click', saveButtonHandler);

async function saveButtonHandler(event) {
  const name = document.querySelector('#character-name').value.trim();
  const character_class = document.querySelector('#class').value.trim();
  const character_level = document.querySelector('#level').value.trim();
  const background = document.querySelector('#background').value.trim();
  const ancestry = document.querySelector('#ancestry').value.trim();
  const alignment = document.querySelector('#alignment').value.trim();
  const proficiency_bonus = document.querySelector('#proficiency').value.trim();
  const player_name = document.querySelector('#player-name').value.trim();
  const strength = document.querySelector('#strength-stat').value.trim();
  const strength_bonus = document.querySelector('#strength-mod').value.trim();
  const dexterity = document.querySelector('#dexterity-stat').value.trim();
  const dexterity_bonus = document.querySelector('#dexterity-mod').value.trim();
  const constitution = document
    .querySelector('#constitution-stat')
    .value.trim();
  const constitution_bonus = document
    .querySelector('#constitution-mod')
    .value.trim();
  const intelligence = document
    .querySelector('#intelligence-stat')
    .value.trim();
  const intelligence_bonus = document
    .querySelector('#intelligence-mod')
    .value.trim();
  const wisdom = document.querySelector('#wisdom-stat').value.trim();
  const wisdom_bonus = document.querySelector('#wisdom-mod').value.trim();
  const charisma = document.querySelector('#charisma-stat').value.trim();
  const charisma_bonus = document.querySelector('#charisma-mod').value.trim();
  const armor_class = document.querySelector('#armor-class').value.trim();
  const initiative = document.querySelector('#initiative').value.trim();
  const speed = document.querySelector('#speed').value.trim();
  const max_hp = document.querySelector('#max-hp').value.trim();
  const current_hp = document.querySelector('#current-hp').value.trim();

  const hit_dice_total = document.querySelector('#hit-dice-total').value.trim();
  const hit_dice_left = document
    .querySelector('#hit-dice-remaining')
    .value.trim();
  const str_save = booleanFixer(document
    .querySelector('#strength-save-proficiency')
    .value.trim());
  const str_save_value = document
    .querySelector('#strength-save-stat')
    .value.trim();
  const dex_save = booleanFixer(document
    .querySelector('#dexterity-save-proficiency')
    .value.trim());
  const dex_save_value = document
    .querySelector('#dexterity-save-stat')
    .value.trim();
  const con_save = booleanFixer(document
    .querySelector('#constitution-save-proficiency')
    .value.trim());
  const con_save_value = document
    .querySelector('#constitution-save-stat')
    .value.trim();
  const int_save = booleanFixer(document
    .querySelector('#intelligence-save-proficiency')
    .value.trim());
  const int_save_value = document
    .querySelector('#intelligence-save-stat')
    .value.trim();
  const wis_save = booleanFixer(document
    .querySelector('#wisdom-save-proficiency')
    .value.trim());
  const wis_save_value = document
    .querySelector('#wisdom-save-stat')
    .value.trim();
  const cha_save = booleanFixer(document
    .querySelector('#charisma-save-proficiency')
    .value.trim());
  const cha_save_value = document
    .querySelector('#charisma-save-stat')
    .value.trim();
  const acrobatics = booleanFixer(document
    .querySelector('#acrobatics-proficiency')
    .value.trim());
  const acrobatics_value = document
    .querySelector('#acrobatics-stat')
    .value.trim();
  const animal_handling = booleanFixer(document
    .querySelector('#animal-handling-proficiency')
    .value.trim());
  const animal_handling_value = document
    .querySelector('#animal-handling-stat')
    .value.trim();
  const arcana = booleanFixer(document.querySelector('#arcana-proficiency').value.trim());
  const arcana_value = document.querySelector('#arcana-stat').value.trim();
  const athletics = booleanFixer(document
    .querySelector('#athletics-proficiency')
    .value.trim());
  const athletics_value = document
    .querySelector('#athletics-stat')
    .value.trim();
  const deception = booleanFixer(document
    .querySelector('#deception-proficiency')
    .value.trim());
  const deception_value = document
    .querySelector('#deception-stat')
    .value.trim();
  const history = booleanFixer(document.querySelector('#history-proficiency').value.trim());
  const history_value = document.querySelector('#history-stat').value.trim();
  const insight = booleanFixer(document.querySelector('#insight-proficiency').value.trim());
  const insight_value = document.querySelector('#insight-stat').value.trim();
  const intimidation = booleanFixer(document
    .querySelector('#intimidation-proficiency')
    .value.trim());
  const intimidation_value = document
    .querySelector('#intimidation-stat')
    .value.trim();
  const investigation = booleanFixer(document
    .querySelector('#investigation-proficiency')
    .value.trim());
  const investigation_value = document
    .querySelector('#investigation-stat')
    .value.trim();
  const medicine = booleanFixer(document.querySelector('#medicine-proficiency').value.trim());
  const medicine_value = document.querySelector('#medicine-stat').value.trim();
  const nature = booleanFixer(document.querySelector('#nature-proficiency').value.trim());
  const nature_value = document.querySelector('#nature-stat').value.trim();
  const perception = booleanFixer(document
    .querySelector('#perception-proficiency')
    .value.trim());
  const perception_value = document
    .querySelector('#perception-stat')
    .value.trim();
  const performance = booleanFixer(document
    .querySelector('#performance-proficiency')
    .value.trim());
  const performance_value = document
    .querySelector('#performance-stat')
    .value.trim();
  const persuasion = booleanFixer(document
    .querySelector('#persuasion-proficiency')
    .value.trim());
  const persuasion_value = document
    .querySelector('#persuasion-stat')
    .value.trim();
  const religion = booleanFixer(document.querySelector('#religion-proficiency').value.trim());
  const religion_value = document.querySelector('#religion-stat').value.trim();
  const sleight_of_hand = booleanFixer(document
    .querySelector('#slight-of-hand-proficiency')
    .value.trim());
  const sleight_of_hand_value = document
    .querySelector('#slight-of-hand-stat')
    .value.trim();
  const stealth = booleanFixer(document.querySelector('#stealth-proficiency').value.trim());
  const stealth_value = document.querySelector('#stealth-stat').value.trim();
  const survival = booleanFixer(document.querySelector('#survival-proficiency').value.trim());
  const survival_value = document.querySelector('#survival-stat').value.trim();
  const passive_perception = document
    .querySelector('#passive-wisdom')
    .value.trim();
  const inspiration = booleanFixer(document.querySelector('#inspiration').value.trim());
  const personality_traits = document
    .querySelector('#personality-traits')
    .value.trim();
  const ideals = document.querySelector('#ideals').value.trim();
  const bonds = document.querySelector('#bonds').value.trim();
  const flaws = document.querySelector('#flaws').value.trim();
  const attack_name_1 = document.querySelector('#attack1-name').value.trim();
  const attack_damage_1 = document.querySelector('#damage1').value.trim();
  const attack_strength_1 = document.querySelector('#strength1').value.trim();
  const attack_name_2 = document.querySelector('#attack2-name').value.trim();
  const attack_damage_2 = document.querySelector('#damage2').value.trim();
  const attack_strength_2 = document.querySelector('#strength2').value.trim();
  const attack_name_3 = document.querySelector('#attack3-name').value.trim();
  const attack_damage_3 = document.querySelector('#damage3').value.trim();
  const attack_strength_3 = document.querySelector('#strength3').value.trim();
  const proficiencies = document
    .querySelector('#other-proficiencies-and-languages')
    .value.trim();
  const equipment = document.querySelector('#equipment').value.trim();
  const features = document.querySelector('#features-and-traits').value.trim();
  const spell_1 = document.querySelector('#spell1').value.trim();
  const spell_2 = document.querySelector('#spell2').value.trim();
  const spell_3 = document.querySelector('#spell3').value.trim();
  const spell_4 = document.querySelector('#spell4').value.trim();
  const spell_5 = document.querySelector('#spell5').value.trim();

  function booleanFixer(param) {
    if (param){
    return 1
    } else{
    return 0
    }
  }


  if (name) {
    const response = await fetch('/api/character', {
      method: 'POST',
      body: JSON.stringify({
        name,
        character_class,
        character_level,
        background,
        ancestry,
        alignment,
        proficiency_bonus,
        player_name,
        strength,
        strength_bonus,
        dexterity,
        dexterity_bonus,
        constitution,
        constitution_bonus,
        intelligence,
        intelligence_bonus,
        wisdom,
        wisdom_bonus,
        charisma,
        charisma_bonus,
        armor_class,
        initiative,
        speed,
        max_hp,
        current_hp,
        hit_dice_total,
        hit_dice_left,
        str_save,
        str_save_value,
        dex_save,
        dex_save_value,
        con_save,
        con_save_value,
        int_save,
        int_save_value,
        wis_save,
        wis_save_value,
        cha_save,
        cha_save_value,
        acrobatics,
        acrobatics_value,
        animal_handling,
        animal_handling_value,
        arcana,
        arcana_value,
        athletics,
        athletics_value,
        deception,
        deception_value,
        history,
        history_value,
        insight,
        insight_value,
        intimidation,
        intimidation_value,
        investigation,
        investigation_value,
        medicine,
        medicine_value,
        nature,
        nature_value,
        perception,
        perception_value,
        performance,
        performance_value,
        persuasion,
        persuasion_value,
        religion,
        religion_value,
        sleight_of_hand,
        sleight_of_hand_value,
        stealth,
        stealth_value,
        survival,
        survival_value,
        passive_perception,
        inspiration,
        personality_traits,
        ideals,
        bonds,
        flaws,
        attack_name_1,
        attack_damage_1,
        attack_strength_1,
        attack_name_2,
        attack_damage_2,
        attack_strength_2,
        attack_name_3,
        attack_damage_3,
        attack_strength_3,
        proficiencies,
        equipment,
        features,
        spell_1,
        spell_2,
        spell_3,
        spell_4,
        spell_5,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      console.log(response);
      alert('Failed to create entry');
    }
  }
}