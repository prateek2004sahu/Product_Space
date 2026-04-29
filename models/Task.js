const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Task = sequelize.define("Task", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  status: { 
    type: DataTypes.ENUM("pending", "completed"), 
    defaultValue: "pending" 
  },
});

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

module.exports = Task;