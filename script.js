// Unsplash API
const count = 10;
const apiKey = 'qYBWL_B_tZRhjDrNEyxoZQE5IWAN8_6iUaPc5e3LuxM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch (error) {
        // Catch Error here
    }
}

// On load
getPhotos();