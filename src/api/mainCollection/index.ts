import fetchDelay from "../delay";

export async function getAllCollection() {
    await fetchDelay()
    const data = await fetch('http://localhost:4000/mainCollections')
    if (!data) {
        return 'not found'
    }
    const jsonFormat = await data.json()

    return jsonFormat;
}