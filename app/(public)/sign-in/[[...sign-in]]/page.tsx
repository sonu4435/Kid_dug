import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-screen flex items-center justify-center backdrop:opacity-5">
      <SignIn />
    </div>
  );
}
