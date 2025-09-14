import Heading from "./components/heading";
import List from "./components/list";

function App() {
  const preparationList = [
    { bold: "Total:", content: "Approximately 10 minutes" },
    { bold: "Preparation:", content: "5 minutes" },
    { bold: "Cooking:", content: "5 minutes" },
  ];

  const ingredientsList = [
    { content: "2-3 large eggs" },
    { content: "Salt, to taste" },
    { content: "Pepper, to taste" },
    { content: "1 tablespoon of butter or oil" },
    {
      content:
        "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    },
  ];

  const instructionsList = [
    {
      bold: "Beat the eggs:",
      content:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },

    {
      bold: "Heat the pan:",
      content:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },

    {
      bold: "Cook the omelette:",
      content:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },

    {
      bold: "Add fillings (optional):",
      content:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },

    {
      bold: "Fold and serve:",
      content:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },

    {
      bold: "Enjoy:",
      content: "Serve hot, with additional salt and pepper if needed.",
    },
  ];

  return (
    <main className="font-sans md:bg-[#DED3C8] pb-8 md:py-16">
      <div className="w-full md:max-w-[800px] bg-white/70 mx-auto md:p-8 md:rounded-3xl">
        <img
          src="/fm-recipe-app/images/image-omelette.jpeg"
          alt="Omelette"
          className="aspect-16/9 md:rounded-2xl object-cover"
        />

        <div className="flex flex-col gap-8 p-4 md:px-0 md:pt-8 text-neutral-600">
          <Heading
            as="h1"
            title="Simple Omelette Recipe"
            className="text-4xl md:text-5xl"
          />
          {/* <h1 className="text-4xl md:text-5xl font-serif text-neutral-800"> */}
          {/*   Simple Omelette Recipe */}
          {/* </h1> */}

          <p className="font-normal">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="p-4 bg-[#EBE3EA] rounded-2xl leading-10">
            <Heading
              title="Preparation time"
              className="font-semibold text-2xl font-sans! text-neutral-600!"
            />
            <List
              items={preparationList}
              listClassName="list-disc px-4"
              itemsClassName="before:ml-5"
            />
          </div>

          <div className="space-y-6">
            <Heading
              title="Ingredients"
              className="text-3xl md:text-4xl text-[#7A4437]"
            />
            <List
              items={ingredientsList}
              listClassName="list-disc pl-6 space-y-2"
              itemsClassName="before:ml-5"
            />
          </div>

          <div className="border-b border-[#adadad]" />

          <div className="space-y-4">
            <Heading
              title="Instructions"
              className="text-3xl md:text-4xl text-[#7A4437]"
            />

            <List
              items={instructionsList}
              listClassName="list-decimal space-y-2 pl-6"
              itemsClassName="marker:font-bold pl-6"
            />
          </div>

          <div className="border-b border-[#adadad]" />

          <div className="space-y-6">
            <Heading
              title="Nutrition"
              className="text-3xl md:text-4xl text-[#7A4437]"
            />
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="table-auto w-full">
              <div className="p-2 px-4 border-b border-neutral-300 w-full">
                <span className="inline-block w-1/2">Calories</span>
                <span className="font-bold text-left inline-block">
                  277kcal
                </span>
              </div>

              <div className="p-2 px-4 border-b border-neutral-300">
                <span className="inline-block w-1/2">Carbs</span>
                <span className="font-bold inline-block w-1/2">0g</span>
              </div>

              <div className="p-2 px-4 border-b border-neutral-300">
                <span className="inline-block w-1/2">Protein</span>
                <span className="font-bold inline-block w-1/2">20g</span>
              </div>

              <div className="p-2 px-4">
                <span className="inline-block w-1/2">Fat</span>
                <span className="font-bold inline-block w-1/2">22g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
