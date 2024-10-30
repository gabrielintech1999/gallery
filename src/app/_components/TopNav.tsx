import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
