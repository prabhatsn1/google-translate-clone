import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = auth();

  return (
    <main className="flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl lg:text-6xl text-center  mb-3 font-light">
        Understand your world and communicate across languages
      </h1>
      <Image
        src="https://img.freepik.com/free-vector/translating-app-mobile-phone-people-using-online-translation-service-translating-from-english-into-french-vector-illustration-foreign-language-learning-online-service-communication-concept_74855-10180.jpg?t=st=1729428875~exp=1729432475~hmac=7207b1ec1b2a5fb12f5555e4d356fb16037cf1e991615da7b496bad373128d2e&w=1480"
        alt="logo"
        width={500}
        height={500}
      />
      {userId ? (
        <Link
          href="/translate"
          className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5 rounded-md text-white text-center cursor-pointer"
        >
          Translate Now
        </Link>
      ) : (
        <Button className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5">
          <SignInButton forceRedirectUrl="/translate" mode="modal">
            Sign In to Get Translating
          </SignInButton>
        </Button>
      )}
    </main>
  );
}
