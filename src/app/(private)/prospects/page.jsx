import ProspectsProposalsLayout from "@/app/layouts/ProspectsProposalsLayout.jsx/layout"
import ProspectsDashboard from "@/components/pages/dashboard/prospect-dashboard"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { verifyToken } from "@/app/api/lib/auth"

export const metadata = {
	title: "Prospects Page"
}

export default async function ProspectsPage() {
	try {
		const cookieStore = await cookies()
		const session = cookieStore.get('session') || cookieStore.get( '_vercel_jwt' )
	
		if (session && session.value) {
			const { user_type } = await verifyToken(session.value)
	
			if (user_type == 'prospects') {
				return (
					<ProspectsProposalsLayout>
						<ProspectsDashboard />
					</ProspectsProposalsLayout>)
			} else {
				redirect( `/${user_type}`)
			}
		} else {
			return redirect('/login')
		}
	} catch ( err ) {
		return redirect('/login')
	}
	
}