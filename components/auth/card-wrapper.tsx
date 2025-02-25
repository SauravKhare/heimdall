"use client";
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import Header from "@/components/auth/header";
import SocialButtons from "@/components/auth/social-buttons";
import CardBackButton from "@/components/auth/card-back-button";

interface CardWrapperProps {
	children: React.ReactNode;
	headerText: string;
	backButtonText: string;
	backButtonHref: string;
	showSocialButtons?: boolean;
}

export default function CardWrapper({
	children,
	headerText,
	backButtonText,
	backButtonHref,
	showSocialButtons,
}: CardWrapperProps) {
	return (
		<Card className="w-[400px] shadow-md">
			<CardHeader>
				<Header label={headerText}></Header>
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocialButtons && (
				<CardFooter>
					<SocialButtons></SocialButtons>
				</CardFooter>
			)}
			<CardFooter>
				<CardBackButton href={backButtonHref} label={backButtonText} />
			</CardFooter>
		</Card>
	);
}
