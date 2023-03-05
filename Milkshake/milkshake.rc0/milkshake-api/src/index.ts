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

type Server = {
    port: number
}

const {
    DB_DIALECT = '',
    DB_PORT = '',
    DB_HOST = '',
    DB_DATABASE = '',
    DB_USERNAME = '',
    DB_PASSWORD = '',
} = process.env
