import fetchDelay from "../delay"

export async function getAllCollections() {
    await fetchDelay()
    const data = await fetch('http://localhost:4000/collections')

    if (!data) {
        return null
    }

    const jsonFormat = await data.json()
    return jsonFormat
}