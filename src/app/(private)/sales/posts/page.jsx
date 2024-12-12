import SalesManagerLayout from "@/app/layouts/SalesManagerLayout.jsx/layout";
import dynamic from "next/dynamic";

const SalesPostsComponent = dynamic(() => import( '@/components/pages/sales/posts/SalesPostsComponent'))

export default function SalesPostPage() {
	return <SalesManagerLayout>
		<SalesPostsComponent />
	</SalesManagerLayout>
}