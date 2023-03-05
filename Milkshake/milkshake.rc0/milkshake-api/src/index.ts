import dotenv from 'dotenv'
import config from '../config/config.json'
import { type } from 'os'

dotenv.config()

type DatabaseConnection = {
    dialect: string
    host: string
    port: string
    database: string
    username: string
    password: string
}

type Security = {
    secretKey: string
    expiresIn: string
}

type Server = {}
