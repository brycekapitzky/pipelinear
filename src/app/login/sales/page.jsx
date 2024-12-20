import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/app/api/lib/auth"
import { deleteAuthCookies } from '@/app/api/auth/actions'

export const metadata = {
	title: 'Vendors Login',
};

export default async function SalesLoginPage() {
	const cookieStore = await cookies()
	const session = cookieStore.get('session') || cookieStore.get('_vercel_jwt')

	if (session && session.value) {
		let user_type = null
		let has_error = false

		try {
			 const data = await verifyToken(session.value)
			 user_type = data.user_type
		} catch ( err ) {
			has_error = true
		}

		if ( has_error ) {
			redirect( '/login/expired' )
		} else {
			redirect(`/${user_type}`)
		}

	} else {
		redirect( '/login' )
	}
}