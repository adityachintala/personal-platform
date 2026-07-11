import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="max-w-4xl text-center text-3xl leading-tight font-medium">
        Hello, I am Aditya Chintala and I ran out of AI credits making this
        website.
      </h1>

      <Image
        src="/images/human.png"
        alt="Donation meme"
        width={500}
        height={500}
        className="mt-10 rounded-lg shadow-lg"
      />
    </main>
  );
}