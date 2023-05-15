
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'permissions',
    timestamps: true
})

class Permission extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    id_permission!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name_permission!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    status_permission!: boolean;
}


export default Permission;


