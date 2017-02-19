/* @flow */

import { describe, it } from 'mocha';
import { expect } from 'chai';

import getOpenedRecipeContent from './selectors';


describe('test OpenedRecipeContent selectors', () => {
	it('should return opened recipe\'s content', () => {
		/* eslint-disable quotes, quote-props, comma-dangle*/
		const recipes = {
			'Tomato Cucumber Avocado Salad': {
				recipe_id: 1,
				title: 'Tomato Cucumber Avocado Salad',
				image_name: 'tomato-cucumber-avocado-salad.jpg',
				instructions: 'Add cherry tomatoes, cucumber, avocado, red onion and garlic in a medium salad bowl.\r\n\r\nSprinkle minced parsley. Pour olive oil over salad, and season with salt and pepper.\r\n\r\nNote: Add avocado right before serving if you are planning to refrigerate the salad.',
				servings: 4,
				ingredients: {
					'cherry tomatoes': 237,
					cucumber: 237,
					avocado: 1,
					'red onion': 118,
					garlic: 2,
					parsley: 15,
					'olive oil': 15,
					'salt and freshly ground black pepper': 0,
				},
			},
			'Crab And Apple Coleslaw': {
				recipe_id: 2,
				title: 'Crab And Apple Coleslaw',
				image_name: 'crab-and-apple-coleslaw.jpg',
				instructions: 'In a large bowl, combine mayonnaise, vinegar, sugar, cream, lemon,  salt, and pepper. Add cabbage, carrot, bell pepper, green apple and  toss. Next, add half of the crab meat and toss gently. Place portion  on plate, and top with remaining crab. Garnish with apple slices.',
				servings: 2,
				ingredients: {
					'rice vinegar': 15,
					'heavy cream': 30,
					sugar: 15,
					'green apple': 1,
					'salt and pepper': 0,
					'head green cabbage': 0.5,
					'cooked crab meat': 0.226796185,
					lemon: 0,
					carrot: 79,
					'red apple': 0.5,
					'red bell pepper': 79,
					mayonnaise: 158,
				},
			},
		};

		const ingredients = {
			"cherry tomatoes": {
				"department": "Produce",
				"unit": "ml"
			},
			"cucumber": {
				"department": "Produce",
				"unit": "ml"
			},
			"avocado": {
				"department": "Produce",
				"unit": ""
			},
			"red onion": {
				"department": "Produce",
				"unit": "ml"
			},
			"garlic": {
				"department": "Produce",
				"unit": "cloves"
			},
			"parsley": {
				"department": "Produce",
				"unit": "ml"
			},
			"olive oil": {
				"department": "Condiments",
				"unit": "ml"
			},
			"salt and freshly ground black pepper": {
				"department": "Spices",
				"unit": ""
			},
			"rice vinegar": {
				"department": "Asian",
				"unit": "ml"
			},
			"heavy cream": {
				"department": "Dairy",
				"unit": "ml"
			},
			"sugar": {
				"department": "Baking",
				"unit": "ml"
			},
			"green apple": {
				"department": "Produce",
				"unit": ""
			},
			"salt and pepper": {
				"department": "Spices",
				"unit": ""
			},
			"head green cabbage": {
				"department": "Produce",
				"unit": ""
			},
			"cooked crab meat": {
				"department": "Canned Meat and Fish",
				"unit": "kg"
			},
			"lemon": {
				"department": "Produce",
				"unit": ""
			},
			"carrot": {
				"department": "Produce",
				"unit": "ml"
			},
			"red apple": {
				"department": "Produce",
				"unit": ""
			},
			"red bell pepper": {
				"department": "Produce",
				"unit": ""
			},
			"mayonnaise": {
				"department": "Condiments",
				"unit": "ml"
			},
			"salmon steaks": {
				"department": "Meats",
				"unit": ""
			},
			"soy sauce": {
				"department": "Asian",
				"unit": "ml"
			},
			"maple syrup": {
				"department": "Baking",
				"unit": "ml"
			},
			"sesame oil": {
				"department": "Condiments",
				"unit": "ml"
			},
			"ginger": {
				"department": "Produce",
				"unit": "ml"
			},
			"crushed red chili pepper flakes": {
				"department": "Spices",
				"unit": "ml"
			},
			"sesame seeds": {
				"department": "Condiments",
				"unit": ""
			},
			"chopped green onions": {
				"department": "Produce",
				"unit": ""
			},
			"pasta": {
				"department": "Pasta",
				"unit": "kg"
			},
			"shrimp": {
				"department": "Seafood",
				"unit": "g"
			},
			"garlic infused olive oil (or regular olive oil)": {
				"department": "Condiments",
				"unit": "ml"
			},
			"olive oil cooking spray": {
				"department": "Condiments",
				"unit": ""
			},
			"fresh rosemary": {
				"department": "Produce",
				"unit": "ml"
			},
			"red pepper flakes": {
				"department": "Spices",
				"unit": ""
			},
			"water": {
				"department": "Beverages",
				"unit": "ml"
			},
			"butter": {
				"department": "Dairy",
				"unit": "ml"
			},
			"basil": {
				"department": "Produce",
				"unit": "ml"
			},
			"cayenne pepper": {
				"department": "Spices",
				"unit": "ml"
			},
			"paprika": {
				"department": "Spices",
				"unit": "ml"
			},
			"garlic Powder ": {
				"department": "Spices",
				"unit": "ml"
			},
			"mild italian sausages": {
				"department": "Meats",
				"unit": ""
			},
			"bay leaves": {
				"department": "Produce",
				"unit": ""
			},
			"extra virgin olive oil": {
				"department": "Condiments",
				"unit": "ml"
			},
			"onion": {
				"department": "Produce",
				"unit": ""
			},
			"celery": {
				"department": "Produce",
				"unit": ""
			},
			"fresh parsley": {
				"department": "Produce",
				"unit": "ml"
			},
			"ripe tomatoes": {
				"department": "Produce",
				"unit": ""
			},
			"artichoke hearts": {
				"department": "Produce",
				"unit": ""
			},
			"angel hair": {
				"department": "Pasta",
				"unit": "g"
			},
			"grated parmesan": {
				"department": "Cheeses",
				"unit": "ml"
			},
			"dry white wine": {
				"department": "Beverages",
				"unit": "ml"
			},
			"lemon juice": {
				"department": "Produce",
				"unit": "ml"
			},
			"chopped tomato": {
				"department": "Beverages",
				"unit": "ml"
			},
			"chopped fresh basil": {
				"department": "Produce",
				"unit": "ml"
			},
			"ground black pepper": {
				"department": "Spices",
				"unit": ""
			},
			"ripe heirloom tomatoes": {
				"department": "Produce",
				"unit": "kg"
			},
			"chopped chives": {
				"department": "Produce",
				"unit": "ml"
			},
			"lemon zest": {
				"department": "Produce",
				"unit": "ml"
			},
			"salt and white pepper": {
				"department": "Spices",
				"unit": ""
			},
			"low fat or regular sour cream": {
				"department": "Dairy",
				"unit": "ml"
			},
			"chopped dill": {
				"department": "Produce",
				"unit": "ml"
			},
			"Dijon mustard": {
				"department": "Condiments",
				"unit": "ml"
			},
			"chopped parsley": {
				"department": "Produce",
				"unit": "ml"
			},
			"rosemary": {
				"department": "Produce",
				"unit": "ml"
			},
			"marjoram": {
				"department": "Produce",
				"unit": ""
			},
			"salt": {
				"department": "Baking",
				"unit": "ml"
			},
			"coarsely ground pepper": {
				"department": "Spices",
				"unit": "ml"
			},
			"medium zucchini": {
				"department": "Produce",
				"unit": ""
			},
			"fresh lemon": {
				"department": "Produce",
				"unit": ""
			}
		};

		const openedRecipe = "Tomato Cucumber Avocado Salad";

		const expectedOpenedRecipeContent = {
			"recipe_id": 1,
			"title": "Tomato Cucumber Avocado Salad",
			"image_name": "tomato-cucumber-avocado-salad.jpg",
			"instructions": "Add cherry tomatoes, cucumber, avocado, red onion and garlic in a medium salad bowl.\r\n\r\nSprinkle minced parsley. Pour olive oil over salad, and season with salt and pepper.\r\n\r\nNote: Add avocado right before serving if you are planning to refrigerate the salad.",
			"servings": 4,
			"ingredients": {
				"cherry tomatoes": "237 ml",
				"cucumber": "237 ml",
				"avocado": "1 ",
				"red onion": "118 ml",
				"garlic": "2 cloves",
				"parsley": "15 ml",
				"olive oil": "15 ml",
				"salt and freshly ground black pepper": "0 "
			}
		};
		/* eslint-enable */

		expect(getOpenedRecipeContent(recipes, ingredients, openedRecipe))
			.to.deep.equal(expectedOpenedRecipeContent);
	});
});
