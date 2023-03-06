import { getUserData } from '../../lib/jwt'
import {
    IUser,
    ICreateUserInput,
    IModels,
    ILoginInput,
    IAuthPayload
} from '../../types'
import {
    doLogin,
    getUserBy
} from '../../lib/auth'

export default {
    Query: {
        getUsers: (
            _: any,
            args: any,
            { models }: { models: IModels }
        ): IUser[] => models.User.findAll(),
        getUserData: async (
            _: any,
            { at }: { at: string },
            { models }: { models: IModels }
        ): Promise<any> => {
            const connectedUser = await getUserData(at)
            if (connectedUser) {
                const user = await getUserBy(
                    {
                        id: connectedUser.id,
                        email: connectedUser.email,
                        privilege: connectedUser.privilege,
                        active: connectedUser.active
                    },
                    models
                )
                if (user) {
                    return {
                        ...connectedUser
                    }
                }
            }
            return {
                id: '',
                username: '',
                password: '',
                email: '',
                privilege: '',
                active: false
            }
        }
    },
    Mutation: {}
}
