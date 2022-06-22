import { DataTypes, Model } from "sequelize";
import sequelize from "../../../lib/sequelize";

class Todo extends Model {
  public id!: number;
  public name!: string;
  public status!: string;
}

Todo.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.TEXT,
    status: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "todo",
    tableName: "todo",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Todo;
