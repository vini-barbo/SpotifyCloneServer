interface UserCreateDTO {
    user_name: string,
    first_name: string,
    last_name: string,
    email: string,
    birthdate: string,
    password: string,
}

interface UserDatabaseDTO {
    user_id: string,
    user_name: string,
    first_name: string,
    last_name: string,
    email: string,
    birthdate: string,
    password: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
}

interface UserSearchQueryDTO {
    user_id?: string,
    user_name?: string,
    first_name?: string,
    last_name?: string,
    email?: string,
    birthdate?: string,
    password?: string,
    created_at?: string,
    updated_at?: string,
    deleted_at?: string,
}


export { UserCreateDTO, UserDatabaseDTO, UserSearchQueryDTO }