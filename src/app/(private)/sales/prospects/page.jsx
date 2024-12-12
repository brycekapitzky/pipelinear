import SalesManagerLayout from "@/app/layouts/SalesManagerLayout.jsx/layout";
import dynamic from "next/dynamic";

const SalesProspectsComponent = dynamic(() => import ('@/components/pages/sales/prospects/SalesProspectsComponent') )

export default function SalesManagerProspectPage() {
	return <SalesManagerLayout>
		<SalesProspectsComponent />
	</SalesManagerLayout>
}