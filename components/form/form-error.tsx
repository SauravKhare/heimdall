import { BsExclamationTriangle } from "react-icons/bs";

export default function FormError({
	message,
}: {
	message: string | undefined;
}) {
	if (!message) return null;

	return (
		<div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
			<BsExclamationTriangle className="w-4 h-4" />
			<p>{message}</p>
		</div>
	);
}
