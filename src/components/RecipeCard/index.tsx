import { Recipe } from "../../types/recipe";
import Link from "next/link";

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div
      key={recipe.id}
      className="my-8 rounded shadow-lg shadow-gray-200  bg-white  duration-300 hover:-translate-y-1"
    >
      <Link href={`/recipes/${recipe.id}`} className="cursor-pointer">
        <figure>
          <img
            src={recipe.image}
            className="rounded-t h-72 w-full object-cover"
            alt={recipe.title}
          />
          <figcaption className="p-4">
            <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 ">
              {recipe.title}
            </p>

            <small className="leading-5 text-gray-500 dark:text-gray-400">
              ID: {recipe.id}
            </small>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};
