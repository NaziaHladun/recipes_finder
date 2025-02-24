import { notFound } from "next/navigation";
import { ExtendedRecipe } from "./types";

async function getRecipe(id: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
  );
  const data: ExtendedRecipe = await res.json();
  if (!data) notFound();

  return data;
}

export default async function Recipe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = await getRecipe(id);

  return (
    <div className="flex justify-center bg-slate-50 h-screen">
      <div className="px-4 py-5 space-y-3 w-full sm:w-3/4 md:w-1/2 ">
        <h1 className="font-bold">{recipe.title}</h1>
        <img className="mr-5" src={recipe.image} alt={recipe.title} />
        <div
          dangerouslySetInnerHTML={{ __html: `<p>${recipe.summary}</p>` }}
        ></div>

        <div>
          <h1 className="font-bold">Ingredients :</h1>
          <ul className="list-disc pl-5">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
