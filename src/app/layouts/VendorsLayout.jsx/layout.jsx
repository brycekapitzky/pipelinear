import SimpleSidebar from "@/components/sidebar";

export default function VendorsLayout({ children }) {

	return ( <SimpleSidebar user_type={'vendors'} > {children} </SimpleSidebar> )
}