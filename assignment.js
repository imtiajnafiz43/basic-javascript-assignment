// https://github.com/imtiajnafiz43/basic-javascript-assignment

// task-1:kilometerToMeter
function kilometerToMeter(kilometer) {

    //execute if when value positive
    if (kilometer >= 0) {
        var meter = kilometer * 1000; // 1 kilometer = 1000 meter
        return meter; // return meter value
    }
    //execute else when value negative 
    else {
        return 'Oops! distance cannot be negative';
    }
}

// task-2: budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    if (watch && phone && laptop > 0) {
        forWatch = watch * 50;
        forPhone = phone * 100;
        forLaptop = laptop * 500;
        totalBudget = (forWatch + forPhone + forLaptop);
        return totalBudget;
    }
    //excute else when value is negative or zero
    else {
        return 'LOL! make sure you have money to buy.';
    }
}

// task-3:hotelCost
function hotelCost(daysSpend) {
    var totalCost = 0;
    // if someone goes to the hotel and stays.
    while (daysSpend > 0) {
        if (daysSpend <= 10) {
            totalCost = daysSpend * 100;
        }
        else if (daysSpend <= 20) {
            var firstCost = 10 * 100;
            var remaining = daysSpend - 10;
            var secondCost = remaining * 80;
            totalCost = firstCost + secondCost;
        }
        else {
            var firstCost = 10 * 100;
            var secondCost = 10 * 80;
            var remaining = daysSpend - 20;
            var thirdCost = remaining * 50;
            totalCost = firstCost + secondCost + thirdCost;
        }
        return totalCost;
    }
    // if someone doesn't stay in the hotel
    return "Hotel authority can't take money if you don't stay there "
}

// task-4:megaFriend
function megaFriend(friendsName) {
    //check string empty or not 
    if (friendsName.length == 0 || friendsName == '' || friendsName == "") {
        return "string can't be empty";
    }
    else {
        var max = friendsName[0].length;
        var megaFriendName = friendsName[0];
        for (var i = 1; i < friendsName.length; i++) {
            if (max < friendsName[i].length) {
                max = friendsName[i].length;
                megaFriendName = friendsName[i];
            }
        }
        return megaFriendName;
    }
}
