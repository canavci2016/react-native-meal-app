class Meal {
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGluterFree, isVegetarian, isLactoseFree) {
        this.id = id;
        this.title = title;
        this.categoryIds = categoryIds;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGluterFree = isGluterFree;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;