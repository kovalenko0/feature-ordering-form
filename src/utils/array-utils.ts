export function contains<ItemType>(array: ItemType[], item: ItemType) {
    return array.indexOf(item) !== -1
}

export function addIfMissing<ItemType>(array: ItemType[], item: ItemType) {
    if (!contains(array, item)) {
        array.push(item)
    }
    return array
}

export function lastItem<ItemType>(array: ItemType[]) {
    if (array.length === 0) {
        return null
    } else {
        return array[array.length - 1]
    }
}

export function remove<ItemType>(array: ItemType[], item: ItemType) {
    if (!contains(array, item)) {
        return array
    } else {
        const itemLocation = array.indexOf(item)
        array.splice(itemLocation, 1)
        return array
    }
}