import dynamic from "next/dynamic"
// const SalesMeetingsComponent = dynamic( () => ("@/components/pages/sales/meetings/SalesMeetingsComponent"))

import SalesMeetingsComponent from '@/components/pages/sales/meetings/SalesMeetingForm'
export const metadata = {
	title: "Meetings Page"
}

export default function NewMeetingsPage() {
	return <SalesMeetingsComponent />
}