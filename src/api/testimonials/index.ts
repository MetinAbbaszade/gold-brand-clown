import fetchDelay from "../delay"

export const getAllTestimonials = async () => {
    await fetchDelay()
    const data = await fetch('http://localhost:4000/testimonials')
    if (!data) {
        return null
    }

    const jsonFormat = await data.json()
    return jsonFormat
}