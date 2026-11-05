import { createContext, useContext, useState } from "react"

const initialData = {
    businessInfo: {email: "" , phoneNumber: "" , businessName: ""},
    aboutYourShop: {shopCategory: "" , websiteLink: "" , businessDsc: ""}
}

const SellerProviderContext = createContext(null);

export function SellerProvider(){
    const [data , setData] = useState(initialData);

    const updateSection = (section , values) => {
        setData((prev) => ({
            ...prev,
            [section]:{...prev[section] , ...values}
        }));
    }

    const reset = () => {
        setData(initialData);
    }
}

