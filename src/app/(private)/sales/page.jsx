
import SalesManagerLayout from "@/app/layouts/SalesManagerLayout.jsx/layout";
import SalesManagerDashboard from "@/components/pages/dashboard/sales-dashboard";

export default function SalesManagerPage() {
	return <SalesManagerLayout>
		<SalesManagerDashboard />
	</SalesManagerLayout>
}