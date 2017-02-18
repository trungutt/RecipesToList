/* @flow */

import { describe, it } from 'mocha';
import { expect } from 'chai';

import json from '../source/recipes';
import transformJsonResponse from './getStateFromJson';

describe('getStateFromJsonArr', () => {
	it('should transform json', () => {
		const expectedJSON = transformJsonResponse(json);

		/* eslint-disable */
		expect(expectedJSON).to.deep.equal({
			"entities": {
				"recipes": {
					"Tomato Cucumber Avocado Salad": {
						"recipe_id": 1,
						"title": "Tomato Cucumber Avocado Salad",
						"image_name": "tomato-cucumber-avocado-salad.jpg",
						"instructions": "Add cherry tomatoes, cucumber, avocado, red onion and garlic in a medium salad bowl.\r\n\r\nSprinkle minced parsley. Pour olive oil over salad, and season with salt and pepper.\r\n\r\nNote: Add avocado right before serving if you are planning to refrigerate the salad.",
						"servings": 4,
						"ingredients": {
							"cherry tomatoes": 237,
							"cucumber": 237,
							"avocado": 1,
							"red onion": 118,
							"garlic": 2,
							"parsley": 15,
							"olive oil": 15,
							"salt and freshly ground black pepper": 0
						}
					},
					"Crab And Apple Coleslaw": {
						"recipe_id": 2,
						"title": "Crab And Apple Coleslaw",
						"image_name": "crab-and-apple-coleslaw.jpg",
						"instructions": "In a large bowl, combine mayonnaise, vinegar, sugar, cream, lemon,  salt, and pepper. Add cabbage, carrot, bell pepper, green apple and  toss. Next, add half of the crab meat and toss gently. Place portion  on plate, and top with remaining crab. Garnish with apple slices.",
						"servings": 2,
						"ingredients": {
							"rice vinegar": 15,
							"heavy cream": 30,
							"sugar": 15,
							"green apple": 1,
							"salt and pepper": 0,
							"head green cabbage": 0.5,
							"cooked crab meat": 0.226796185,
							"lemon": 0,
							"carrot": 79,
							"red apple": 0.5,
							"red bell pepper": 79,
							"mayonnaise": 158
						}
					},
					"Maple Soy Grilled Salmon Steaks": {
						"recipe_id": 3,
						"title": "Maple Soy Grilled Salmon Steaks",
						"image_name": "maple-soy-grilled-salmon-steak.jpg",
						"instructions": "In a shallow dish or a baking dish whisk together the soy sauce, maple syrup, sesame oil, ginger, garlic and the pepper flakes. Add salmon to the dish and turn it around to get the glaze all over. Cover with plastic wrap and let marinate for at least an hour.\r\n\r\nGrill the salmon on both sides, until salmon is cooked through or to your liking. I left mine about 4 minutes per side. As you're grilling the salmon, brush with remaining glaze on each side.\r\n\r\nServe garnished with some green onions and sesame seeds, with a side of vegetables or salad.",
						"servings": 4,
						"ingredients": {
							"salmon steaks": 4,
							"soy sauce": 59,
							"maple syrup": 59,
							"sesame oil": 15,
							"ginger": 4.9289215832170585,
							"garlic": 3,
							"crushed red chili pepper flakes": 2.4644607916085293,
							"sesame seeds": 0,
							"chopped green onions": 0
						}
					},
					"Spicy Garlic Rosemary Shrimp & Pasta": {
						"recipe_id": 4,
						"title": "Spicy Garlic Rosemary Shrimp & Pasta",
						"image_name": "spicy-garlic-rosemary-shrimp-pasta.jpg",
						"instructions": "Boil pasta per package directions to al dente. While it is cooking, prepare shrimp.\r\n\r\nHeat a large skillet over moderate heat, then add olive oil and garlic and cook briefly, until golden. Add shrimp, then sprinkle with rosemary and pepper flakes. Cook, stirring, until just cooked through, about 3 minutes. Remove from heat. Season with salt and pepper to taste.\r\n\r\nWhen pasta is ready, drain and immediately spray lightly but evenly with olive oil cooking spray, tossing to coat. Portion into dishes and top with shrimp. Squeeze lemon juice over top and serve. ",
						"servings": 3,
						"ingredients": {
							"pasta": 0.226796185,
							"shrimp": 0.45359237,
							"garlic infused olive oil (or regular olive oil)": 15,
							"olive oil cooking spray": 1,
							"garlic": 2,
							"fresh rosemary": 15,
							"red pepper flakes": 2.46446079160853,
							"salt and pepper": 1,
							"lemon": 1
						}
					},
					"Butter and Herb Poached Shrimp": {
						"recipe_id": 5,
						"title": "Butter and Herb Poached Shrimp",
						"image_name": "butter-and-herb-poached-shrimp.jpg",
						"instructions": "In a sauce pan on Medium heat add water and butter. Allow the butter to completely melt (about 2 minutes). Add Basil, Cayenne Pepper, Salt, Pepper, Paprika and Garlic Powder. Cook on Medium heat for about 2-3 minutes stirring slowly so that the butter is infused with the flavors. Lower the heat to Low.\r\n\r\nAdd Shrimp and stir slowly until shrimp turns a nice coral color and the tails curl. \r\n\r\n(3 Minutes with Extra Large Shrimp max 4-5 Minutes)\r\n\r\nBe careful not to over cook the shrimp or it will become rubbery. ",
						"servings": 2,
						"ingredients": {
							"shrimp": 300,
							"water": 118,
							"butter": 44,
							"basil": 44,
							"cayenne pepper": 2.46446079160853,
							"paprika": 2.46446079160853,
							"garlic Powder ": 2.46446079160853,
							"salt and pepper": 0
						}
					},
					"Baked Angel Hair Pasta with Sausage and Smooth Tomato and Artichoke Sauce": {
						"recipe_id": 6,
						"title": "Baked Angel Hair Pasta with Sausage and Smooth Tomato and Artichoke Sauce",
						"image_name": "baked-angel-hair-pasta-with-sausage.jpg",
						"instructions": "Preheat oven to 350F.  Lightly oil a 12x9x2 inch baking dish.  Place sausages in the dish.  Stick bay leaves between sausages.  Place the dish in the oven until the sausages are fully cooked, about 30 minutes.\r\n\r\nRemove the sausages from the casserole and set aside.\r\n\r\nIn a skillet, heat oil over medium heat.  Add onion, celery, parsley and garlic, and cook, stirring frequently, until softened, about 6 minutes.  Add tomatoes, bell pepper and artichoke hearts. Season to taste with salt and pepper. Reduce the heat to low, cover and cook, stirring occasionally, until denser, about 50 minutes.  Pass the sauce through a strainer and set aside.\r\n\r\nBring a large pot of salted water to a vigorous boil. Add pasta and boil until half cooked, about 1 1/2 minutes.  Drain and toss the pasta with the sauce. \r\n\r\nArrange the pasta in the empty dish that the sausages were cooked and then place the sausages in rows on the top. Bake until the top of the pasta begins to get a little crunchy, 20 to 25 minutes. Sprinkle Parmesan liberally over the dash answer. Makes 4 to 6 servings.",
						"servings": 6,
						"ingredients": {
							"mild italian sausages": 8,
							"bay leaves": 4,
							"extra virgin olive oil": 118,
							"onion": 1,
							"celery": 1,
							"fresh parsley": 59,
							"garlic": 3,
							"ripe tomatoes": 3,
							"red bell pepper": 0.5,
							"artichoke hearts": 5,
							"salt and pepper": 0,
							"angel hair": 0.45359237,
							"grated parmesan": 100
						}
					},
					"Angel Hair Pasta with Lemon and Garlic": {
						"recipe_id": 7,
						"title": "Angel Hair Pasta with Lemon and Garlic",
						"image_name": "angelhairpastawithlemonandgarl.jpg",
						"instructions": "Bring a large pot of water to a boil over high heat and maintain at a boil.  Put the olive oil and garlic in a saute pan and cook over medium heat just  until the garlic begins to brown. Remove the saute pan from the heat and  pour in the wine. Return it to the heat. Cook for another 1 to 2 minutes,  until the wine has been reduced by half. Stir in the lemon juice and  tomato.  Remove the pan from the heat. Place the pasta in the boiling water  and cook to desired doneness, 30 seconds to 1 minute. Drain the pasta and  put it into a warm serving bowl. Add the basil, Parmesan cheese, and black  pepper, along with the tomato mixture.  Toss and serve immediately.    ",
						"servings": 4,
						"ingredients": {
							"olive oil": 4.92892158321706,
							"garlic": 2,
							"dry white wine": 118,
							"lemon juice": 59,
							"chopped tomato": 237,
							"angel hair": 226,
							"chopped fresh basil": 59,
							"grated parmesan": 30,
							"ground black pepper": 0
						}
					},
					"Summer Tomato and Crab Salad": {
						"recipe_id": 8,
						"title": "Summer Tomato and Crab Salad",
						"image_name": "summer-tomato-and-crab-salad.jpg",
						"instructions": "Put tomatoes, crab, chives, lemon juice, zest, salt and pepper into a large bowl and toss gently to combine; set aside. Stir together sour cream, dill, mustard, salt and pepper in a small bowl.\r\n\r\nSpoon tomato and crab salad onto plates and serve with dollops of the dill sour cream on the side.",
						"servings": 6,
						"ingredients": {
							"ripe heirloom tomatoes": 1.133980925,
							"cooked crab meat": 0.45359237,
							"chopped chives": 59,
							"lemon juice": 59,
							"lemon zest": 4.92892158321706,
							"salt and white pepper": 0,
							"low fat or regular sour cream": 177,
							"chopped dill": 30,
							"Dijon mustard": 15
						}
					},
					"Salmon on the Grill with Lemon Butter": {
						"recipe_id": 9,
						"title": "Salmon on the Grill with Lemon Butter",
						"image_name": "salmon-on-the-grill-with-lemon-butt.jpg",
						"instructions": "Brush fish lightly with oil. In bowl combine remaining ingredients.  Place salmon on well-oiled, hinged grill. Baste salmon with lemon butter mixture & cook 5 minutes, then turn & continue cooking 5 minutes. Baste with lemon butter several times during cooking.",
						"servings": 8,
						"ingredients": {
							"salmon steaks": 8,
							"olive oil": 0,
							"butter": 59,
							"lemon juice": 30,
							"chopped parsley": 30,
							"rosemary": 1.23223039580426,
							"marjoram": 0,
							"salt": 1.23223039580426,
							"coarsely ground pepper": 0.616115197902132
						}
					},
					"Zucchini Noodles With Lemon-Garlic Spicy Shrimp": {
						"recipe_id": 10,
						"title": "Zucchini Noodles With Lemon-Garlic Spicy Shrimp",
						"image_name": "zucchini-noodles-with-lemon-garlic.jpg",
						"instructions": "Heat a medium nonstick skillet over medium-high heat. Add 1 teaspoon of the oil and crush red pepper flakes, add the shrimp and season with pinch salt and pepper; cook 2 to 3 minutes. Add half of the garlic and continue cooking 1 more minute, or until the shrimp is cooked through and opaque. Set aside on a dish.\r\n\r\nAdd the remaining 1/2 teaspoon oil and garlic to the pan, cook 30 seconds then add the zucchini noodles and cook 1 1/2 minutes. Add the shrimp and tomatoes to the pan and squeeze the lemon over the dish. Remove from heat and serve.\r\n",
						"servings": 1,
						"ingredients": {
							"olive oil": 15,
							"red pepper flakes": 0,
							"shrimp": 120,
							"garlic": 2,
							"medium zucchini": 1,
							"salt and pepper": 0,
							"fresh lemon": 0.25,
							"cherry tomatoes": 59
						}
					}
				},
				"ingredients": {
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
				}
			}
		});
		/* eslint-enable */
	});
});
