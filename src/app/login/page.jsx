import MainLogin from "@/components/pages/login/main-login";
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/app/api/lib/auth"

export const metadata = {
	title: 'Main Login',
};

export default async function MainLoginPage() {
	const cookieStore = await cookies()
	const session = cookieStore.get('session') || cookieStore.get('_vercel_jwt')

	if (session && session.value) {
		const { user_type } = await verifyToken(session.value)
		redirect(`/${user_type}`)
	} else {
		return (<MainLogin />)
	}


}
