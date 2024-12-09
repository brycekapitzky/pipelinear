import VendorsLayout from "@/app/layouts/VendorsLayout.jsx/layout";
import VendorDashboard from "@/components/pages/dashboard/vendor-dashboard";

export const metadata = {
	title: "Vendors Page"
}

export default function VendorsPage() {
	return (
		<VendorsLayout>
			<VendorDashboard />
		</VendorsLayout>
	)
}