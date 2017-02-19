/* @flow */

import { describe, it } from 'mocha';
import { expect } from 'chai';

import getRecipesList from '../selectors';


describe('test RecipesList selectors', () => {
	it('should return recipes', () => {
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

		const expectedRecipes = {
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

		expect(getRecipesList(recipes)).to.deep.equal(expectedRecipes);
	});
});
