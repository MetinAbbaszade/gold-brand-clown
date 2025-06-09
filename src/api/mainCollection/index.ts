export async function getAllCollection() {
    const data = await fetch('http://localhost:4000/mainCollections')
    if (!data) {
        return 'not found'
    }
    const jsonFormat = await data.json()

    return jsonFormat;
}