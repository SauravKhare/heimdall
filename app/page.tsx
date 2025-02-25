import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="">
			<div className="space-y-6 text-center">
				<h1 className="text-6xl font-semibold text-white drop-shadow-md">
					🔐 Heimdall
				</h1>
				<p className="text-white text-lg">
					A simple user authentication service.
				</p>
				<div>
					<LoginButton>
						<Button variant="secondary" size="lg">
							Sign in
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
