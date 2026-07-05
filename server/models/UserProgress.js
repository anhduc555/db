import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const UserProgress = sequelize.define('UserProgress', {
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  answeredIndex: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isFlagged: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
});

export default UserProgress;
