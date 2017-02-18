/* @flow */

type IngredientOfItem = {
	display_index: number,
	name: string,
	department: string,
	quantity: number,
	unit: string,
};
type IngredientsOfItem = Array<IngredientOfItem>;
type Item = {
	recipe_id: number,
	title: string,
	image_name: string,
	instructions: string,
	servings: number,
	ingredients: IngredientsOfItem,
};
type Items = Array<Item>;

const transformJsonResponse = (items: Items): Object => {
	const state = items.reduce((accumulator, item) => {
		let ingredientsOfRecipe = {};
		let ingredients = {};

		item.ingredients.forEach((ingredient) => {
			ingredientsOfRecipe = {
				...ingredientsOfRecipe,
				[ingredient.name]: ingredient.quantity,
			};

			ingredients = {
				...ingredients,
				[ingredient.name]: {
					department: ingredient.department,
					unit: ingredient.unit,
				},
			};
		});

		return {
			entities: {
				recipes: {
					...accumulator.entities.recipes,
					[item.title]: {
						recipe_id: item.recipe_id,
						title: item.title,
						image_name: item.image_name,
						instructions: item.instructions,
						servings: item.servings,
						ingredients: ingredientsOfRecipe,
					},
				},
				ingredients: {
					...accumulator.entities.ingredients,
					...ingredients,
				},
			},
		};
	}, {
		entities: {
			recipes: {
			},
			ingredients: {
			},
		},
	});

	return state;
};

export default transformJsonResponse;
