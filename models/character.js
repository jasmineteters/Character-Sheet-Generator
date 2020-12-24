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
    character_class: { type: dataTypes.STRING },
    character_level: { type: dataTypes.INTEGER, allowNull: false },
    background: { type: dataTypes.STRING },
    ancestry: { type: dataTypes.STRING },
    alignment: { type: dataTypes.STRING },

    //stats
    strength: { type: dataTypes.INTEGER, allowNull: false },
    dexterity: { type: dataTypes.INTEGER, allowNull: false },
    constitution: { type: dataTypes.INTEGER, allowNull: false },
    intelligence: { type: dataTypes.INTEGER, allowNull: false },
    wisdom: { type: dataTypes.INTEGER, allowNull: false },
    charisma: { type: dataTypes.INTEGER, allowNull: false },

    //defense
    armor_class: { type: dataTypes.INTEGER },
    initiative: { type: dataTypes.INTEGER },
    speed: { type: dataTypes.INTEGER },

    //health
    max_hp: { type: dataTypes.INTEGER },
    current_hp: { type: dataTypes.INTEGER },
    temp_hp: { type: dataTypes.INTEGER },
    hit_dice_type: { type: dataTypes.INTEGER },
    hit_dice_total: { type: dataTypes.INTEGER },
    hit_dice_left: { type: dataTypes.INTEGER },
    death_save_successes: { type: dataTypes.INTEGER },
    death_save_failures: { type: dataTypes.INTEGER },

    //saving throws
    str_save: { type: dataTypes.BOOLEAN },
    dex_save: { type: dataTypes.BOOLEAN },
    con_save: { type: dataTypes.BOOLEAN },
    int_save: { type: dataTypes.BOOLEAN },
    wis_save: { type: dataTypes.BOOLEAN },
    cha_save: { type: dataTypes.BOOLEAN },

    //skill card
    acrobatics: { type: dataTypes.BOOLEAN },
    animal_handling: { type: dataTypes.BOOLEAN },
    arcana: { type: dataTypes.BOOLEAN },
    athletics: { type: dataTypes.BOOLEAN },
    deception: { type: dataTypes.BOOLEAN },
    history: { type: dataTypes.BOOLEAN },
    insight: { type: dataTypes.BOOLEAN },
    intimidation: { type: dataTypes.BOOLEAN },
    investigation: { type: dataTypes.BOOLEAN },
    medicine: { type: dataTypes.BOOLEAN },
    nature: { type: dataTypes.BOOLEAN },
    perception: { type: dataTypes.BOOLEAN },
    performance: { type: dataTypes.BOOLEAN },
    persuasion: { type: dataTypes.BOOLEAN },
    religion: { type: dataTypes.BOOLEAN },
    sleight_of_hand: { type: dataTypes.BOOLEAN },
    stealth: { type: dataTypes.BOOLEAN },
    survival: { type: dataTypes.BOOLEAN },

    //roleplay
    personality_traits: { type: dataTypes.STRING },
    ideals: { type: dataTypes.STRING },
    bonds: { type: dataTypes.STRING },
    flaws: { type: dataTypes.STRING },

    //attacks
    attack_name_1: { type: dataTypes.STRING },
    attack_damage_1: { type: dataTypes.INTEGER },
    attack_type_1: { type: dataTypes.STRING },

    attack_name_2: { type: dataTypes.STRING },
    attack_damage_2: { type: dataTypes.INTEGER },
    attack_type_2: { type: dataTypes.STRING },

    attack_name_3: { type: dataTypes.STRING },
    attack_damage_3: { type: dataTypes.INTEGER },
    attack_type_3: { type: dataTypes.STRING },

    //list of stuff
    proficiencies: { type: dataTypes.STRING },

    //list of stuff
    equipment: { type: dataTypes.STRING },

    //list of stuff
    features: { type: dataTypes.STRING },
  },
});

module.exports = Character;
