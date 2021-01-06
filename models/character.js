const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
  {
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
      },
      // date_created: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   defaultValue: DataTypes.NOW,
      // },

      //header
      name: { type: DataTypes.STRING, allowNull: false },
      character_class: { type: DataTypes.STRING },
      character_level: { type: DataTypes.STRING(3), defaultValue: 0 },
      background: { type: DataTypes.STRING },
      ancestry: { type: DataTypes.STRING },
      alignment: { type: DataTypes.STRING },
      proficiency_bonus: { type: DataTypes.STRING(3), defaultValue: 0 },
      player_name: { type: DataTypes.STRING },

      //stats
      strength: { type: DataTypes.STRING(3), defaultValue: 0 },
      strength_bonus: { type: DataTypes.STRING(3), defaultValue: 0 },
      dexterity: { type: DataTypes.STRING(3), defaultValue: 0 },
      dexterity_bonus: { type: DataTypes.STRING(3), defaultValue: 0 },
      constitution: { type: DataTypes.STRING(3), defaultValue: 0 },
      constitution_bonus: { type: DataTypes.STRING(3), defaultValue: 0 },
      intelligence: { type: DataTypes.STRING(3), defaultValue: 0 },
      intelligence_bonus: { type: DataTypes.STRING(3), defaultValue: 0 },
      wisdom: { type: DataTypes.STRING(3), defaultValue: 0 },
      wisdom_bonus: { type: DataTypes.STRING(3), defaultValue: 0 },
      charisma: { type: DataTypes.STRING(3), defaultValue: 0 },
      charisma_bonus: { type: DataTypes.STRING(3), defaultValue: 0 },

      //defense
      armor_class: { type: DataTypes.STRING(3), defaultValue: 0 },
      initiative: { type: DataTypes.STRING(3), defaultValue: 0 },
      speed: { type: DataTypes.STRING(3), defaultValue: 0 },

      //health
      max_hp: { type: DataTypes.STRING(3), defaultValue: 0 },
      current_hp: { type: DataTypes.STRING(3), defaultValue: 0 },
      hit_dice_total: { type: DataTypes.STRING(3), defaultValue: 0 },
      hit_dice_left: { type: DataTypes.STRING(3), defaultValue: 0 },
      

      //saving throws
      str_save: { type: DataTypes.BOOLEAN },
      str_save_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      dex_save: { type: DataTypes.BOOLEAN },
      dex_save_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      con_save: { type: DataTypes.BOOLEAN },
      con_save_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      int_save: { type: DataTypes.BOOLEAN },
      int_save_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      wis_save: { type: DataTypes.BOOLEAN },
      wis_save_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      cha_save: { type: DataTypes.BOOLEAN },
      cha_save_value: { type: DataTypes.STRING(3), defaultValue: 0 },

      //skill card
      acrobatics: { type: DataTypes.BOOLEAN },
      acrobatics_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      animal_handling: { type: DataTypes.BOOLEAN },
      animal_handling_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      arcana: { type: DataTypes.BOOLEAN },
      arcana_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      athletics: { type: DataTypes.BOOLEAN },
      athletics_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      deception: { type: DataTypes.BOOLEAN },
      deception_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      history: { type: DataTypes.BOOLEAN },
      history_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      insight: { type: DataTypes.BOOLEAN },
      insight_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      intimidation: { type: DataTypes.BOOLEAN },
      intimidation_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      investigation: { type: DataTypes.BOOLEAN },
      investigation_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      medicine: { type: DataTypes.BOOLEAN },
      medicine_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      nature: { type: DataTypes.BOOLEAN },
      nature_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      perception: { type: DataTypes.BOOLEAN },
      perception_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      performance: { type: DataTypes.BOOLEAN },
      performance_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      persuasion: { type: DataTypes.BOOLEAN },
      persuasion_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      religion: { type: DataTypes.BOOLEAN },
      religion_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      sleight_of_hand: { type: DataTypes.BOOLEAN },
      sleight_of_hand_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      stealth: { type: DataTypes.BOOLEAN },
      stealth_value: { type: DataTypes.STRING(3), defaultValue: 0 },
      survival: { type: DataTypes.BOOLEAN },
      survival_value: { type: DataTypes.STRING(3), defaultValue: 0 },

      passive_perception: { type: DataTypes.STRING(3), defaultValue: 0 },
      inspiration: { type: DataTypes.BOOLEAN },

      //role play
      personality_traits: { type: DataTypes.STRING },
      ideals: { type: DataTypes.STRING },
      bonds: { type: DataTypes.STRING },
      flaws: { type: DataTypes.STRING },

      //attacks
      attack_name_1: { type: DataTypes.STRING },
      attack_damage_1: { type: DataTypes.STRING(3), defaultValue: 0 },
      attack_strength_1: { type: DataTypes.STRING },

      attack_name_2: { type: DataTypes.STRING },
      attack_damage_2: { type: DataTypes.STRING(3), defaultValue: 0 },
      attack_strength_2: { type: DataTypes.STRING },

      attack_name_3: { type: DataTypes.STRING },
      attack_damage_3: { type: DataTypes.STRING(3), defaultValue: 0 },
      attack_strength_3: { type: DataTypes.STRING },

      //list of stuff
      proficiencies: { type: DataTypes.STRING },

      //list of stuff
      equipment: { type: DataTypes.STRING },

      //list of stuff
      features: { type: DataTypes.STRING },

      // spells
      spell_1: { type: DataTypes.STRING },
      spell_2: { type: DataTypes.STRING },
      spell_3: { type: DataTypes.STRING },
      spell_4: { type: DataTypes.STRING },
      spell_5: { type: DataTypes.STRING },
    },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  },
);

module.exports = Character;
