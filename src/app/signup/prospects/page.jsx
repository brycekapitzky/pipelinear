import SignupForm from "@/components/pages/signup/signup-form";
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/app/api/lib/auth"

export const metadata = {
	title: 'Signup Login',
};

export default async function ProspectsSignUp() {
	try {
		const cookieStore = await cookies()
		const session = cookieStore.get('session')
	
		if (session && session.value) {
			const { user_type } = await verifyToken(session.value)
	
			redirect(`/${user_type}`)
		} else {
			return (<SignupForm user_type={"prospects"} />)
		}
	} catch ( err ) {
		return (<SignupForm user_type={"prospects"} />)
	}

}