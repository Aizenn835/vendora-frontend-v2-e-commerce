
export const enumChecker = (sellerCategory) => {
    if(sellerCategory === 'HOME_AND_LIVING'){
        return "Home & Living";
    }
    else if(sellerCategory === "CLOTHING_ACCESSORIES"){
        return "Clothing & Accessories";
    }
    else if(sellerCategory === "BEAUTY_AND_WELLNESS"){
        return "Beauty & Wellness";
    }
    else if(sellerCategory === "FOOD_AND_DRINK"){
        return "Food & Drink";
    }
    else if(sellerCategory === "ART_AND_STATIONERY"){
        return "Art & Stationery";
    }
}

export const formatInitial = (value) => {
    return value?.split(" ").slice(0,2).map((word) => word[0]).join("").toUpperCase();
}

