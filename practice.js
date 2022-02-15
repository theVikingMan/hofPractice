
//_.each problem set -->
// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      count += 1;
    }
  });
  return count;
};

//filter problem set -->
// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var output = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return output;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var onlyP = _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return true;
    }
  });
  return onlyP;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookieType = _.filter(desserts, function(dessert) {
    return (dessert['type'] === 'cookie') ? true : false;
  });
  return cookieType;
};

//reduce problem set -->
// return the total price of all products.
var sumTotal = function(products) {
  var total = _.reduce(products, function(sum, product) {
    return sum + parseFloat((product['price']).substring(1));
  }, 0);
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var onlyTypes = _.reduce(desserts, function(obj, dessert) {
    var dessertType = dessert['type'];
    if (!obj[dessertType]) {
      obj[dessertType] = 0;
    }
    obj[dessertType] += 1;
    return obj;
  }, {});
  return onlyTypes;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var index1 = 0;
  var allTheNineties = _.reduce(movies, function(arr, movie) {
    if (movie['releaseYear'] >= 1990 && movie['releaseYear'] <= 2000) {
      arr[index1] = movie['title'];
      index1 += 1;
    }
    return arr;
  }, []);
  return allTheNineties;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var shortMovies = _.reduce(movies, function(presentMovie, movie, index) {
    if (movie['runtime'] < timeLimit) {
      return presentMovie = true;
    } else {
      return presentMovie;
    }
  }, false);
  return shortMovies;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var upperFruits = _.map(fruits, function(fruit) {
    var word = "";
    word += fruit.toUpperCase();
    return word;
  });
  return upperFruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var hasGluten = _.map(desserts, function(dessert) {
    var newObj = {};
    if (dessert["ingredients"].includes('flour') === false) {
      newObj['name'] = dessert['name']
      newObj['glutenFree'] = true;
      return newObj;
    }
    return
  }).filter(function(i) {
    return (!(i === undefined));
  });
  return hasGluten;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var salePrices = _.map(groceries, function(item) {
    var itemDesc = {};
    var salesPrice = (parseFloat((item['price']).substring(1)) * (1 - coupon)).toFixed(2);
    itemDesc['id'] = item['id'];
    itemDesc['product'] = item['product'];
    itemDesc['price'] = item['price'];
    itemDesc['salePrice'] = '$' + salesPrice;
    console.log(itemDesc);
    return itemDesc;
  });
  return salePrices;
};
