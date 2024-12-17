import VendorsLayout from "@/app/layouts/VendorsLayout.jsx/layout";
import VendorDashboard from "@/components/pages/dashboard/vendor-dashboard";
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { verifyToken } from "@/app/api/lib/auth"

export const metadata = {
	title: "Vendors Page"
}

export default async function VendorsPage() {
	try {
		const cookieStore = await cookies()
		const session = cookieStore.get('session')

		if (session && session.value) {
			const { user_type } = await verifyToken(session.value)

			if (user_type == 'vendors') {
				return <VendorsLayout>
					<VendorDashboard />
				</VendorsLayout>
			} else {
				return redirect(`${user_type}`)
			}
		} else {
			return redirect('/login')
		}
	} catch (err) {
		return redirect('/login')
	}
}