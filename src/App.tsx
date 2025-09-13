function App() {
  return (
    <main className="font-sans md:bg-[#DED3C8] pb-8 md:py-16">
      <div className="w-full md:max-w-[800px] bg-white/70 mx-auto md:p-8 md:rounded-3xl">
        <img
          src="images/image-omelette.jpeg"
          alt="Omelette"
          className="aspect-16/9 md:rounded-2xl object-cover"
        />

        <div className="flex flex-col gap-8 p-4 md:px-0 md:pt-8 text-neutral-600">
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-800">
            Simple Omelette Recipe
          </h1>

          <p className="font-normal">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="p-4 bg-[#EBE3EA] rounded-2xl leading-10">
            <h2 className="font-semibold text-2xl">Preparation time</h2>
            <ul className="list-disc px-4">
              <li>
                <span className="font-bold before:ml-5">Total:</span>{" "}
                Approximately 10 minutes
              </li>
              <li>
                <span className="font-bold before:ml-5">Preparation:</span> 5
                minutes
              </li>
              <li>
                <span className="font-bold before:ml-5">Cooking:</span> 5
                minutes
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-[#7A4437]">Ingredients</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="before:ml-5">2-3 large eggs</li>
              <li className="before:ml-5">Salt, to taste</li>
              <li className="before:ml-5">Pepper, to taste</li>
              <li className="before:ml-5">1 tablespoon of butter or oil</li>
              <li className="before:ml-5">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>

          <div className="border-b border-[#adadad]" />

          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-[#7A4437]">Instructions</h2>
            <ol className="list-decimal list-outside space-y-2 pl-6">
              <li className="marker:font-bold marker:font-['Cambria'] pl-6">
                <span className="font-bold">Beat the eggs:</span> In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>

              <li className="marker:font-bold pl-6">
                <span className="font-bold">Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>

              <li className="marker:font-bold pl-6">
                <span className="font-bold">Cook the omelette:</span> Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs eveh2 className="text-4xl font-serif
                text-[#7A4437]"nly coat the surface.
              </li>

              <li className="marker:font-bold pl-6">
                <span className="font-bold">Add fillings (optional):</span> When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>

              <li className="marker:font-bold pl-6">
                <span className="font-bold">Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>

              <li className="marker:font-bold pl-6">
                <span className="font-bold">Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </div>

          <div className="border-b border-[#adadad]" />

          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-[#7A4437]">Nutrition</h2>
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
