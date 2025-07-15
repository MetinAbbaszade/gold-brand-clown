import { LoginFormValues } from "@/components/_common/SignUpComponent";
import fetchDelay from "../delay";

export interface OrderItem {
    id: string;
    order_date: string;
    status: "Delivered" | "Pending" | "Shipped" | "Cancelled";
    img: string;
    name: string;
    description: string;
    price: number;
}

export interface WishlistItem {
    id: string;
    name: string;
    description: string;
    price: number;
    img: string;
}

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    address: string;
    order: OrderItem[];
    wishlist: WishlistItem[];
}

interface LoginCredentials {
    username: string;
    password: string;
}

interface SuccessResponse {
    data: User;
    status_code: 200 | 201;
}

export interface ErrorResponse {
    msg: string;
    status_code: number;
}

export type FetchUserResponse = SuccessResponse | ErrorResponse;
const URL = 'http://localhost:4000'

const fetchAllUser = async () => {
    try {
        await fetchDelay()
        const res = await fetch(`${URL}/users`);
        const users: User[] = await res.json();
        if (!users) {
            return {
                msg: 'User not found or incorrect password',
                status_code: 404
            };
        }

        return {
            data: users,
            status_code: 200
        };
    } catch (error) {
        return {
            msg: 'Fetch error: ' + (error as Error).message,
            status_code: 500
        };
    }
}


const fetchUserByEmail = async ({ username, password }: LoginCredentials): Promise<FetchUserResponse> => {
    try {
        await fetchDelay()
        const res = await fetch(`${URL}/users`);
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
        await fetchDelay()
        const res = await fetch(`${URL}/users`);
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
export const postUser = async (data: LoginFormValues): Promise<FetchUserResponse> => {
    try {
        await fetchDelay()
        const users = await fetchAllUser();
        const length = users.data?.length ?? 0;

        const dataToSend = { id: length + 1, ...data };

        const res = await fetch(`${URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (!res.ok) {
            throw new Error("Failed to create user");
        }
        const createdUser: User = await res.json();
        return {
            data: createdUser,
            status_code: 201
        };
    } catch (error) {
        return {
            msg: "Unexpected Error",
            status_code: 500
        };
    }
};



export default fetchUserByEmail