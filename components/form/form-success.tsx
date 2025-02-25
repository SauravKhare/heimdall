import { BsCheckCircle } from "react-icons/bs";

export default function FormSuccess({ message }: { message: string }) {
	if (!message) return null;

	return (
		<div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
			<BsCheckCircle className="w-4 h-4" />
			<p>{message}</p>
		</div>
	);
}
