'use server'

import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"

const SECRET_KEY = process.env.JWT_TOKEN

export async function verifyToken( token ) {
	const cookieStore = await cookies()
	try {
		const jwt_data = jwt.verify( token, SECRET_KEY );
		return jwt_data
	} catch ( err ) {
		console.log( 'error is ? ', err )
		throw new Error(err )
	}
}