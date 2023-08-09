import { Model, DataType, Table, Column } from "sequelize-typescript";

interface NoteCreateAttributes {
  title: string;
  content?: string;
  category: string;
  is_archived: boolean;
}

@Table({ tableName: "notes" })
export default class Note extends Model<Note, NoteCreateAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  content: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "",
  })
  category: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_archived: boolean;
}
