import SalesSignUpForm from "@/components/pages/signup/sales/sales-signup";
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/app/api/lib/auth"

export const metadata = {
	title: 'Signup Login',
};

export default async function SalesSignUp() {
	const cookieStore = await cookies()
	const session = cookieStore.get('session') || cookieStore.get('_vercel_jwt')

	if (session && session.value) {
		const { user_type } = await verifyToken(session.value)

		redirect(`/${user_type}`)
	} else {
		return (<SalesSignUpForm />)
	}

}