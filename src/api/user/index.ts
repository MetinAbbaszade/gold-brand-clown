
export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    address: string;
}

interface LoginCredentials {
    username: string;
    password: string;
}

interface SuccessResponse {
    data: User;
    status_code: 200;
}

interface ErrorResponse {
    msg: string;
    status_code: number;
}

export type FetchUserResponse = SuccessResponse | ErrorResponse;


const fetchUserByEmail = async ({ username, password }: LoginCredentials): Promise<FetchUserResponse> => {
    try {
        const res = await fetch('http://localhost:4000/users');
        const users: User[] = await res.json();

        const user = users.find((user) => {
            return user.username === username && user.password === password;
        });

        if (!user) {
            return {
                msg: 'User not found or incorrect password',
                status_code: 404
            };
        }

        return {
            data: user,
            status_code: 200
        };
    } catch (error) {
        return {
            msg: 'Fetch error: ' + (error as Error).message,
            status_code: 500
        };
    }
};

export const fetchUserById = async (id: number | string) => {
    try {
        const res = await fetch('http://localhost:4000/users');
        const users: User[] = await res.json();

        const user = users.find((user) => {
            return user.id == id
        });

        if (!user) {
            return {
                msg: 'User not found',
                status_code: 404
            }
        }
        return {
            data: user,
            status_code: 200
        }
    } catch (error) {
        return {
            msg: 'Fetch error: ' + (error as Error).message,
            status_code: 500
        };
    }
}


export default fetchUserByEmail