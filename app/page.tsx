import dynamic from "next/dynamic";

/** Add your relevant code here for the issue to reproduce */
const Comp = dynamic(() => import("#/app/file2").then((mod) => mod.default));

export default function Home() {
  return <Comp />;
}
