import LoginForm from "@/components/pages/login/login-form";
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/app/api/lib/auth"

export const metadata = {
	title: 'Vendors Login',
};

export default async function LoginPage() {
	const cookieStore = await cookies()
	const session = cookieStore.get('session') || cookieStore.get( '_vercel_jwt' )

	if (session && session.value) {
		const { user_type } = await verifyToken(session.value)

		redirect(`/${user_type}`)
	} else {
		return (<LoginForm user_type={"vendors"} />)
	}

}