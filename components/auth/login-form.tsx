import CardWrapper from "@/components/auth/card-wrapper";

export default function LoginForm() {
	return (
		<CardWrapper
			headerText="Welcome back"
			backButtonText="Don't have an account?"
			backButtonHref="/auth/register"
			showSocialButtons={true}
		>
			Login Form
		</CardWrapper>
	);
}
