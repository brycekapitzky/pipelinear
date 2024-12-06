import SimpleSidebar from "@/components/sidebar";

export default function ProspectsProposalsLayout({ children }) {

	return ( <SimpleSidebar children={children} user_type={'prospects'} /> )
}