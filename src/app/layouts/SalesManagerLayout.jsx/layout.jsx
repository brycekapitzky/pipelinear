import SimpleSidebar from "@/components/sidebar";

export default function SalesManagerLayout({ children }) {
    return <SimpleSidebar user_type="sales_manager" > {children} </SimpleSidebar>
}