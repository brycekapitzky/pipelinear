'use server'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import prisma from "@/app/api/lib/db"
import { verifyToken } from '../lib/auth'

const SECRET_KEY = process.env.JWT_TOKEN

export async function login(email, password, user_type) {
	if (!email || !password) {
		return { success: false, message: 'Email and Password are required' }
	}

	try {
		let record = null

		if (user_type == 'prospects') {

			record = await prisma.prospects.findFirst({
				where: {
					prospect_email_address: email
				}
			})

		} else {

			record = await prisma.clients.findFirst({
				where: {
					client_personal_email: email
				}
			})
		}

		if (record) {
			let isPasswordCorrect = null
			let token = null

			if (user_type == 'prospects') {
				isPasswordCorrect = await bcrypt.compare(password, record.prospect_password_hash);
			} else {
				isPasswordCorrect = await bcrypt.compare(password, record.client_password_hash);
			}


			if (!isPasswordCorrect) {
				return { success: false, message: 'Invalid Credentials' }
			}


			if (user_type == 'prospects') {
				token = jwt.sign({ id: record.prospect_id, email: record.prospect_email_address, user_type: user_type }, SECRET_KEY, {
					expiresIn: '5h',
				});
			} else {
				token = jwt.sign({ id: record.client_id, email: record.client_personal_email, user_type: user_type }, SECRET_KEY, {
					expiresIn: '5h',
				});
			}
			const cookieStore = await cookies()

			cookieStore.set('session', token, {
				httpOnly: true,
				secure: true,
				maxAge: 60 * 60 * 24, // 1 day
			});

			return { success: true, message: 'Login successful' }
		} else {
			return { success: false, message: 'Invalid Credentials' }
		}


	} catch (error) {
		console.error('error loggin in ', error)
		return 'Error logging in', error
	}
}

export async function createAccount(email) {

}

export async function signout() {
	const cookieStore = await cookies()
	cookieStore.set('session', '', {
		httpOnly: true,
		secure: true,
		expires: new Date(0), // Expire immediately
		path: '/',
	})
}

export async function deleteAuthCookies() {
	const cookieStore = await cookies()

	cookieStore.set('session', '', {
		httpOnly: true,
		secure: true,
		expires: new Date(0), // Expire immediately
		path: '/',
	})

	cookieStore.set('_vercel_jwt', '', {
		httpOnly: true,
		secure: true,
		expires: new Date(0), // Expire immediately
		path: '/',
	})

}

export async function getSessionUser() {
	const cookieStore = await cookies()
	
	try {
		const token = cookieStore.get( 'session' ) || cookieStore.get( '_vercel_jwt' )	
		const userData = await verifyToken( token.value )
		return userData
	} catch (err) {

	}
}