export default async function fetchDelay() {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 10000)); // Delay for 2 seconds

    // --- Your actual data fetching logic would go here ---
    // const res = await fetch('your-api-endpoint');
    // const data = await res.json();
    // return data;
    return { message: 'Data loaded!' }; // Example data
}