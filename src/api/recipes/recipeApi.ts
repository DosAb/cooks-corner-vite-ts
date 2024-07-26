import axiosInstance from "../instance"
import { CategoryRecipesParams } from "../types"
import Endpoints from "../endpoints"

export const getRecipesByCategory = async (data: CategoryRecipesParams)=>{
    const response = await axiosInstance.get(
        Endpoints.RECIPES.GET_RECIPE_CATEGORY + `?category=${data.category}&page=${data.page}&limit=${data.limit}`
    );
    return response;
}
export const searchRecipe = async (name: string)=>{
    const response = await axiosInstance.get(
        Endpoints.RECIPES.GET_RECIPE_SEARCH + `?search=${name}`
    );
    return response;
}