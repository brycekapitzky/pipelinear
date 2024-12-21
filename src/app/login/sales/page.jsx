import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/app/api/lib/auth"
import SalesLoginForm from "@/components/pages/login/sales-form";

export const metadata = {
	title: 'Sales Login',
};

export default async function SalesLoginPage() {
	const cookieStore = await cookies()
	const session = cookieStore.get('session') || cookieStore.get('_vercel_jwt')

	if (session && session.value) {
		let user_type = null
		let has_error = false

		try {
			 const data = await verifyToken(session.value)
			 user_type = data?.user_type || null
		} catch ( err ) {
			has_error = true
		}

		console.info( 'user type is ?? ', user_type )
 
		if ( has_error ) {
			redirect( '/login/expired' )
		} else {
			console.info( 'user type is ?? ', user_type )
			redirect(`/${user_type}`)
		}

	} else {
		return <SalesLoginForm />
	}
}