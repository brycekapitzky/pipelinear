import SignupForm from "@/components/pages/signup/signup-form";

export const metadata = {
	title: 'Signup Login',
};

export default function VendorSignUp() {
	return ( <SignupForm user_type={"vendor"} /> )
}