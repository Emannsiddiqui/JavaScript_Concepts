//async/await
function fetchNewData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data is Fetched!");
        }, 2000); 
    });
}
async function displayData() {
    console.log("Fetching data...");
    // Wait fot the data fetching using await
    const data = await fetchNewData();
    console.log(data);
}
displayData();
