import VendorsLayout from "@/app/layouts/VendorsLayout.jsx/layout";
import VendorsProfile from "@/components/pages/vendors/profile/VendorsProfile";
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { verifyToken } from "@/app/api/lib/auth"

export const metadata = {
    title: "Vendors Profiles"
}

export default async function VendorsProfilePage() {
    const cookieStore = await cookies()
    const session = cookieStore.get('session') || cookieStore.get('_vercel_jwt')

    if (session && session.value) {
        const { user_type } = await verifyToken(session.value)

        if (user_type == 'vendors') {
            return <VendorsLayout>
                <VendorsProfile />
            </VendorsLayout>
        } else {
            return redirect(`${user_type}`)
        }
    } else {
        return redirect('/login')
    }
}