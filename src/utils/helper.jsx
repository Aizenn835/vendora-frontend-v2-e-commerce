import decoder from './decoder';



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
        return "ART & STATIONERY";
    }
}

export const RoleRoute = () => {
    const token = localStorage.getItem("Token");
    const decoder = Decoder(token);


}
