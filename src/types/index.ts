export type CartItemPizza = {
    id: number,
    imageUrl: string,
    name: string,
    price: {
        [key: string]: number | string
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

export type RenderPizzaOrders = {
    id:number,
    name:string,
    email:string,
    street:string,
    flatoffice:string,
    floor:string,
    totalprice:number,
    currency:string,
    created_at:string,
    updated_at:string
}
