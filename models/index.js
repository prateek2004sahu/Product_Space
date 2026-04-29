const sequelize = require("../config/db");
const User = require("./User");
const Task = require("./Task");

// Initialize models (important for Sequelize)
const db = {};

db.sequelize = sequelize;
db.User = User;
db.Task = Task;

// 🔗 Associations (VERY IMPORTANT)
db.User.hasMany(db.Task, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

db.Task.belongsTo(db.User, {
  foreignKey: "userId",
});

// Sync database (optional here, or do in server.js)
db.sync = async () => {
  try {
    await sequelize.sync();
    console.log("Database synced");
  } catch (error) {
    console.error("DB Sync error:", error);
  }
};

module.exports = db;