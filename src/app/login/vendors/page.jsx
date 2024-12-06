import LoginForm from "@/components/pages/login/login-form";

export const metadata = {
	title: 'Vendors Login',
};

export default function LoginPage() {
	return ( <LoginForm user_type={"vendors"} /> )
}