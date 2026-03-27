import ProductPageComponent from "@/components/allPages/ProductPageComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Products'
}


const page = () => {
    return (
        <ProductPageComponent />
    )
}

export default page