import Link from "next/link";

export default function Page({ params }) {
  return (
    <div>
      Page {params.id}
      <Link href={`/${Number(params.id) + 1}`}>next</Link>
    </div>
  );
}
