const { Model, DataTypes } = require('sequelize');
//const sequelize = require('../config/connection');

class Character extends Model {}

Character.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    //header
    name: { type: DataTypes.STRING, allowNull: false },
    character_class: { type: DataTypes.STRING, },
    character_level: { type: DataTypes.INTEGER, },
    background: { type: DataTypes.STRING },
    ancestry: { type: DataTypes.STRING },
    alignment: { type: DataTypes.STRING },
    proficiency_bonus: { type: DataTypes.INTEGER },

    //stats
    strength: { type: DataTypes.INTEGER, },
    strength_bonus: { type: DataTypes.INTEGER, },
    dexterity: { type: DataTypes.INTEGER, },
    dexterity_bonus: { type: DataTypes.INTEGER, },
    constitution: { type: DataTypes.INTEGER, },
    constitution_bonus: { type: DataTypes.INTEGER, },
    intelligence: { type: DataTypes.INTEGER, },
    intelligence_bonus: { type: DataTypes.INTEGER, },
    wisdom: { type: DataTypes.INTEGER, },
    wisdom_bonus: { type: DataTypes.INTEGER, },
    charisma: { type: DataTypes.INTEGER, },
    charisma_bonus: { type: DataTypes.INTEGER, },

    //defense
    armor_class: { type: DataTypes.INTEGER },
    initiative: { type: DataTypes.INTEGER },
    speed: { type: DataTypes.INTEGER },

    //health
    max_hp: { type: DataTypes.INTEGER },
    current_hp: { type: DataTypes.INTEGER },
    temp_hp: { type: DataTypes.INTEGER },
    hit_dice_type: { type: DataTypes.INTEGER },
    hit_dice_total: { type: DataTypes.INTEGER },
    hit_dice_left: { type: DataTypes.INTEGER },
    death_save_successes: { type: DataTypes.INTEGER },
    death_save_failures: { type: DataTypes.INTEGER },

    //saving throws
    str_save: { type: DataTypes.BOOLEAN },
    str_save_value: { type: DataTypes.INTEGER },
    dex_save: { type: DataTypes.BOOLEAN },
    dex_save_value: { type: DataTypes.INTEGER },
    con_save: { type: DataTypes.BOOLEAN },
    con_save_value: { type: DataTypes.INTEGER },
    int_save: { type: DataTypes.BOOLEAN },
    int_save_value: { type: DataTypes.INTEGER },
    wis_save: { type: DataTypes.BOOLEAN },
    wis_save_value: { type: DataTypes.INTEGER },
    cha_save: { type: DataTypes.BOOLEAN },
    cha_save_value: { type: DataTypes.INTEGER },

    //skill card
    acrobatics: { type: DataTypes.BOOLEAN },
    acrobatics_value: { type: DataTypes.INTEGER },
    animal_handling: { type: DataTypes.BOOLEAN },
    animal_handling_value: { type: DataTypes.INTEGER },
    arcana: { type: DataTypes.BOOLEAN },
    arcana_value: { type: DataTypes.INTEGER },
    athletics: { type: DataTypes.BOOLEAN },
    athletics_value: { type: DataTypes.INTEGER },
    deception: { type: DataTypes.BOOLEAN },
    deception_value: { type: DataTypes.INTEGER },
    history: { type: DataTypes.BOOLEAN },
    history_value: { type: DataTypes.INTEGER },
    insight: { type: DataTypes.BOOLEAN },
    insight_value: { type: DataTypes.INTEGER },
    intimidation: { type: DataTypes.BOOLEAN },
    intimidation_value: { type: DataTypes.INTEGER },
    investigation: { type: DataTypes.BOOLEAN },
    investigation_value: { type: DataTypes.INTEGER },
    medicine: { type: DataTypes.BOOLEAN },
    medicine_value: { type: DataTypes.INTEGER },
    nature: { type: DataTypes.BOOLEAN },
    nature_value: { type: DataTypes.INTEGER },
    perception: { type: DataTypes.BOOLEAN },
    perception_value: { type: DataTypes.INTEGER },
    performance: { type: DataTypes.BOOLEAN },
    performance_value: { type: DataTypes.INTEGER },
    persuasion: { type: DataTypes.BOOLEAN },
    persuasion_value: { type: DataTypes.INTEGER },
    religion: { type: DataTypes.BOOLEAN },
    religion_value: { type: DataTypes.INTEGER },
    sleight_of_hand: { type: DataTypes.BOOLEAN },
    sleight_of_hand_value: { type: DataTypes.INTEGER },
    stealth: { type: DataTypes.BOOLEAN },
    stealth_value: { type: DataTypes.INTEGER },
    survival: { type: DataTypes.BOOLEAN },
    survival_value: { type: DataTypes.INTEGER },

    passive_perception: { type: DataTypes.INTEGER},

    //roleplay
    personality_traits: { type: DataTypes.STRING },
    ideals: { type: DataTypes.STRING },
    bonds: { type: DataTypes.STRING },
    flaws: { type: DataTypes.STRING },

    //attacks
    attack_name_1: { type: DataTypes.STRING },
    attack_damage_1: { type: DataTypes.INTEGER },
    attack_type_1: { type: DataTypes.STRING },

    attack_name_2: { type: DataTypes.STRING },
    attack_damage_2: { type: DataTypes.INTEGER },
    attack_type_2: { type: DataTypes.STRING },

    attack_name_3: { type: DataTypes.STRING },
    attack_damage_3: { type: DataTypes.INTEGER },
    attack_type_3: { type: DataTypes.STRING },

    //list of stuff
    proficiencies: { type: DataTypes.STRING },

    //list of stuff
    equipment: { type: DataTypes.STRING },
    money: { type: DataTypes.STRING },

    //list of stuff
    features: { type: DataTypes.STRING },
  },
});

module.exports = Character;
