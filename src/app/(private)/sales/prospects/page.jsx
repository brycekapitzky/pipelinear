import SalesManagerLayout from "@/app/layouts/SalesManagerLayout.jsx/layout";
import dynamic from "next/dynamic";

const SalesProspects = dynamic(() => import ('@/components/pages/sales/SalesProspects') )

export default function SalesManagerProspectPage() {
	return <SalesManagerLayout>
		<SalesProspects />
	</SalesManagerLayout>
}