import { auth } from "@/auth";

export default async function SettingsPage() {
	const session = await auth();
	console.log("Session :", session);

	return (
		<div>
			<h2>Settings</h2>
			<div>{JSON.stringify(session)}</div>
		</div>
	);
}
