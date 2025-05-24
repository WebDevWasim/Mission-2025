import { notFound, redirect } from "next/navigation";

type DocsProps = {
  params: Promise<{ slug: string[] }>;
};

const Docs = async ({ params }: DocsProps) => {
  const { slug } = await params;

  if (slug?.length > 3) {
    // TODO: Redirect to not found page
    // notFound();
    // TODO: Redirect to docs page
    redirect("/docs");
  }

  if (slug?.length === 1) {
    return <h1>Artical Page</h1>;
  }

  if (slug?.length > 1) {
    return <h1>/docs/{slug.join("/")}</h1>;
  }

  return <h1>Docs Page</h1>;
};

export default Docs;
