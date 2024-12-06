import ProspectsProposalsLayout from "@/app/layouts/ProspectsProposalsLayout.jsx/layout";
import ProspectsDashboard from "@/components/pages/dashboard/prospect-dashboard";

export const metadata  = {
	title: "Prospects Page"
}

export default function ProspectsPage() {
	return ( 
	<ProspectsProposalsLayout> 
		<ProspectsDashboard />
	</ProspectsProposalsLayout>)
}