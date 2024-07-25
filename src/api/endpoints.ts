const Endpoints = {
    AUTH: {
        LOGIN: "users/login/",
        REGISTER: "users/signup/",
        RESEND: "users/resend-email/",
        REFRESH: "users/login/refresh/",
        LOGOUT: "users/logout/",
    },
    RECIPES: {
        ADD_RECIPE: "recipes/add-recipe/",
        GET_RECIPE_CATEGORY: "recipes/by-category/",
        GET_RECIPE_CHEF: "recipes/by-chef/",
        GET_RECIPE_DETAIL: "recipes/detail/",
        GET_RECIPE_SAVED: "recipes/saved-recipes/",
        GET_RECIPE_SEARCH: "recipes/search/",
    },
    USERS: {
        USER_DETAIL: "profile/detail/",
        USER_PROFILE: "profile/myprofile/",
        USER_SEARCH: "profile/search/"
    }
}

export default Endpoints;