import { encrypt } from '@contentpi/lib'
import {
    IUser, 
    IDataTypes
} from '../types'

export default (sequelize: any, DataTypes: IDataTypes): IUser => {
    const User = sequelize.define(
        'User',
        {
            id: {
                primaryKey: true,
                allowNull: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4()
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isAlphanumeric: {
                        args: true,
                        msg: 'only alphanumeric characters can be accepted for username'
                    },
                    len: {
                        args: [4, 20],
                        msg: 'username can be between four and twenty characters'
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        args: true,
                        msg: 'the supplied email does not have a valid format'
                    }
                }
            },
            privilege: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'user'
            },
            active: {}
        },
        {
            hooks: {}
        }
    )
    return User
}