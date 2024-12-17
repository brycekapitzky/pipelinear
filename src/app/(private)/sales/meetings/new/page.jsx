import dynamic from "next/dynamic"
import SalesManagerLayout from "@/app/layouts/SalesManagerLayout.jsx/layout";

import SalesMeetingsComponent from '@/components/pages/sales/meetings/SalesMeetingForm'
export const metadata = {
	title: "Meetings Page"
}

export default function NewMeetingsPage() {
	return <SalesManagerLayout>
		<SalesMeetingsComponent />
	</SalesManagerLayout>
}