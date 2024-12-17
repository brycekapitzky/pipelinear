'use server'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import prisma from "@/app/api/lib/db"

const SECRET_KEY = process.env.JWT_TOKEN

export async function login( email, password, user_type ) {
	if (!email || !password) {
		return 'Email and Password are required'
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

		if ( record ) {
			let isPasswordCorrect = null
			let token = null
			
			if ( user_type == 'prospects' ) {
				isPasswordCorrect = await bcrypt.compare(password, record.prospect_password_hash);
			} else {
				isPasswordCorrect = await bcrypt.compare(password, record.client_password_hash);
			}
			

			if (!isPasswordCorrect) {
				return 'Invalid email or password'
			}
	

			if ( user_type == 'prospects' ) {
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
	
			return 'Login successful'
		} else {
			return 'Invalid email or password'
		}

		
	} catch (error) {
		console.error( 'error loggin in ', error )
		return 'Error logging in', error
	}
}

export async function createAccount ( email ) {

}

export async function signout () {
	const cookieStore = await cookies()
	cookieStore.set( 'session', '', {
		httpOnly: true,
		secure: true,
		expires: new Date(0), // Expire immediately
		path: '/',
	})
}