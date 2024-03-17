import { Metadata } from "next";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    icons: "../../../favicon.ico",
    title: "KidDug | Privecy",
    description:
        "A new era for kids to learn through AI with full of internet in a creative way. "
};

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full dark:bg-[#1F1F1F]">{children}</div>
    );
};

export default PublicLayout;
