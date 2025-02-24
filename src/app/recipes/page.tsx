import { Suspense } from "react";
import { RecipeList } from "./_components/RecipeList";
import { Loader } from "components/Loader";

export default async function Recipes({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <section className=" py-10 px-12 bg-slate">
      <Suspense fallback={<Loader />}>
        <RecipeList searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
