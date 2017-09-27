var allergens = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
}

class Allergies {
  constructor(input) {
    this.score = input;
  }

  list() {
    let result = [];
    let tempScore = this.score;
    while (tempScore > allergens['cats'] * 2) {
      tempScore -= allergens['cats'];
    }
    for (let key of Object.keys(allergens).reverse()) {
      if (tempScore >= allergens[key] && allergens[key] < tempScore * 2) {
        result.unshift(key);
        tempScore -= allergens[key];
      }
    }
    return result;
  }

  allergicTo(allergy) {
    let allergies = this.list();
    return allergies.indexOf(allergy) >= 0
           ? true
           : false;
  }
}

module.exports = Allergies;
