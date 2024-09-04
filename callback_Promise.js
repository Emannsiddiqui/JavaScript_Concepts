//callback
function fetchData(data){
    setTimeout(function(){
       const someData = "any data";
       data(someData);
    }, 2000);
}
function displayData(data){
    console.log("received data: "+ data);
}
fetchData(displayData);

//promise
const myPromise = new Promise(function(resolve, reject) {
    const success = true;
    setTimeout(function() {
        if (success) {
            resolve("Successful");
        } else {
            reject("failed");
        }
    }, 3000);
});
// Handle the promise
myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error);
    });

