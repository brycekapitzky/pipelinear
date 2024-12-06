import LoginForm from "@/components/pages/login/login-form";

export const metadata = {
	title: 'Propspects Login',
};

export default function ProspectsLoginPage() {
	return ( <LoginForm user_type={"prospects"} /> )
}
