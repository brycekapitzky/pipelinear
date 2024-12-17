'use server'

import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_TOKEN

export async function verifyToken( token ) {
	return jwt.verify( token, SECRET_KEY );
}