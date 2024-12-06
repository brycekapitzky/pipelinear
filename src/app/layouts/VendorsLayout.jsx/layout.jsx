import SimpleSidebar from "@/components/sidebar";

export default function VendorsLayout({ children }) {

	return ( <SimpleSidebar children={children} user_type={'vendors'} /> )
}