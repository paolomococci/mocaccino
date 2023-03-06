import {
    encrypt,
    isPasswordMatch
} from '@contentpi/lib'
import {
    IUser,
    IModels,
    IAuthPayload
} from '../types'
import { createToken } from './jwt'

export const getUserBy = async (
    where: any,
    models: IModels
): Promise<IUser> => {
    const user = await models.User.findOne(
        {
            where,
            raw: true
        }
    )
    return user
}
