export type CartItemPizza = {
    id: number,
    imageUrl: string,
    name: string,
    price: {
        [key: string]: number
    }
}

export type RenderPizza = {
    onAddToCart: (Obj: CartItemPizza) => void,
    last: { index: number, handleLastItem: () => void, ItemsArrayLenght: number },
    currency: string,
    data: CartItemPizza
}

export type RenderPizzaCart = {
    totalPrice: number,
    totalCount: number,
    onRemove: (index: number) => void,
    onMinus: (index: number) => void,
    onPlus: (index: number) => void,
    currency: string,
    data: CartItemPizza
}
