const Character = require('./character');
const User = require('./user');

Character.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
