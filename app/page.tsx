import { getPages } from "@/sanity/utils";

export default async function Home() {

  const pages = await getPages()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {JSON.stringify(pages)}
    </main>
  );
}
