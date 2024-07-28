export type RegisterParams = {
    email: string;
    password: string;
    username: string;
    password_confirm: string;
}

export type LoginParams = {
    email: string;
    password: string;
}

export type CategoryRecipesParams = {
    category: string;
    page: number;
    limit: number;
}
export type ProfileParams = {
    username: string;
    bio: string;
    profile_picture: string;
    slug: string;
    followers: number;
    following: number;
    is_followed: boolean;
    recipes: number;
    is_veryfied: boolean;
}
export type ProfilePutParams = {
    username: string;
    bio: string;
}