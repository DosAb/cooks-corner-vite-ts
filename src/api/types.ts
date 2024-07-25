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