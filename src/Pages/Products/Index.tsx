import { useState } from "react";
import { Products } from "../../../models/Products/Products";



const products = new Products

const [product, setProducts] = useState();
products.select("*").get();