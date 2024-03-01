interface UserCreateDTO {
    user_name: string,
    first_name: string,
    last_name: string,
    email: string,
    birthdate: Date,
    password: string,
}

interface UserDatabaseDTO {
    user_id: string,
    user_name: string,
    first_name: string,
    last_name: string,
    email: string,
    birthdate: Date,
    password: string,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date | null,
}

interface UserSearchQueryDTO {
    user_id?: string,
    user_name?: string,
    first_name?: string,
    last_name?: string,
    email?: string,
    birthdate?: Date,
    password?: string,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date | null,
}

type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
}[keyof T]



export { UserCreateDTO, UserDatabaseDTO, UserSearchQueryDTO, RequireAtLeastOne }