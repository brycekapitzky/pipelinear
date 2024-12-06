import SimpleSidebar from "@/components/sidebar";

export default function ProspectsProposalsLayout({ children }) {

	return ( <SimpleSidebar user_type={'prospects'}> {children} </SimpleSidebar> )
}