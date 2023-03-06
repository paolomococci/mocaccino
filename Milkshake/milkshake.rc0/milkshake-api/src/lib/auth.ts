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

export const doLogin = async (
    email: string,
    password: string,
    models: IModels
): Promise<IAuthPayload> => {
    const user = await getUserBy(
        { email },
        models
    )
    if (!user) {
        // TODO, invalid login: the user is not registered
    }
    const passwordMatch = isPasswordMatch(
        encrypt(password),
        user.password
    )
    const isActive = user.active
    if (!passwordMatch) {
        // TODO, invalid login: the password is not correct
    }
    if (!isActive) {
        // TODO, invalid login: the user is not active 
    }
    const [token] = await createToken(user)
    return {
        token
    }
}
