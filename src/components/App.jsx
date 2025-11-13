import { useEffect, useState} from 'react'
function App() {
    const [image, switchImage] = useState("https://dog.ceo/api/breeds/image/random")
    const [loading, switchLoading] = useState(true)


    function changeImage() {
        switchLoading(true) //loading state resets every time the button is clicked
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch image") //.catch will catch the error
            }
            return response.json()
        })
        .then(data => {
            switchImage(data.message) //updating the image state
            switchLoading(false) //tje API request is successful, so the loading message should not appear
        })
        .catch(e => console.log(e))
        
    }

    useEffect(changeImage, [])
    
    return (
        <div>
            {loading ? <p>Loading...</p> : ""}
            <img src={image} alt="A Random Dog"/>
            <button onClick={changeImage}>Click to change picture</button>
        </div>
    )
}

export default App