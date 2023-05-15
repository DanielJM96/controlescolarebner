
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'roles',
    timestamps: true
})

class Role extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    id_role!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name_role!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    status_role!: boolean;
}

export default Role;


