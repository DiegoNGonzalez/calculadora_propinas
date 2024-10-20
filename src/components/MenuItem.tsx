import { MenuItems } from "../types"

type MenuItemProps = {
    item: MenuItems
}

export default function MenuItem({ item }: MenuItemProps) {
    return (
        <button
            className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>

        </button>
    )
}
