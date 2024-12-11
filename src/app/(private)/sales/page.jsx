
import SalesManagerLayout from "@/app/layouts/SalesManagerLayout.jsx/layout";
import dynamic from "next/dynamic";

const SalesManagerDashboard = dynamic(() => import("@/components/pages/dashboard/sales-dashboard"));

export default function SalesManagerPage() {
	return <SalesManagerLayout>
		<SalesManagerDashboard />
	</SalesManagerLayout>
}