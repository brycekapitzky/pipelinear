import SignupForm from "@/components/pages/signup/signup-form";

export const metadata = {
	title: 'Signup Login',
};

export default function ProspectsSignUp() {
	return ( <SignupForm user_type={"prospects"} /> )
}