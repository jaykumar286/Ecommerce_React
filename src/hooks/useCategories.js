import { useState, useEffect } from "react";
import axios from "axios";

import { getAllCategories } from "../apis/fakeStoreApis";
export default function useCategories() {
  const [categoryList, setCategoryList] = useState([]);

  async function getCategoryList() {
    const response = await axios.get(getAllCategories(),{withCredentials: true});
    setCategoryList(response.data);
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  return categoryList;
}
