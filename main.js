var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if ( drinkType in this.drinkRequirements){
        if ( this.beans >= this.drinkRequirements[drinkType]){
      this.beans = this.beans - this.drinkRequirements[drinkType];
      // alert("here you have your drink and your beans are: "+ beans);
    }
      else {
        alert("you have no beans");
      }
  }
  else {
    alert("sorry we dont make " + drinkType);
  }
}
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");