import { createContext, useState } from "react";

export const AppContext = createContext({} as any);

export function AppProvider({ children }: any) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [products] = useState([
        { id: 1, name: "Produto 1", details: "Descrição 1" },
        { id: 2, name: "Produto 2", details: "Descrição 2" },
        { id: 3, name: "Produto 3", details: "Descrição 3" },
        { id: 4, name: "Produto 4", details: "Descrição 4" },
        { id: 5, name: "Produto 5", details: "Descrição 5" }
    ]);

    const [cart, setCart] = useState<any[]>([]);

    function login(email: string, password: string) {
        if (email && password) {
            setIsAuthenticated(true);
        }
    }

    function addToCart(product: any) {
        setCart([...cart, product]);
    }

    function removeFromCart(indexToRemove: number) {
        setCart(cart.filter((_, index) => index !== indexToRemove));
    }

    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                login,
                products,
                cart,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </AppContext.Provider>
    );
}