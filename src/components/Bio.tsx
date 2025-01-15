import Link from "next/link";

export default function Bio() {
  return (
    <div className="sm:flex-1 sm:max-w-xl sm:mt-8">
      <blockquote className="border-l-4 border-gray-300 pl-6 italic my-4">
        <p className="mb-2">
          Serial key presser by day, factorio player by night.
        </p>
        <p className="mb-2">
          If you&apos;re a high school student, checkout <Link className="underline" href="https://hackclub.com">Hack Club</Link>.
        </p>
      </blockquote>
    </div>
  );
}