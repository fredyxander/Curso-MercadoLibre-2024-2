import { useState, useEffect } from "react"

export const PhotosList = ()=>{
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        const getData = async()=>{
            setLoading(true);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                const data = await response.json();
                const newData = data.slice(0,50);
                setPhotos(newData);
            } catch (error) {
                console.log(error)
            } finally{
                setLoading(false);
            }
        }
        getData();
    },[])

    const removeImg = (photoId)=>{
        const copyPhotos = [...photos];
        const newPhotosList = copyPhotos.filter(i=>i.id!==photoId);
        setPhotos(newPhotosList);
    }

    console.log("photos",photos)
    return(
        <div>
            <h2 data-testid="title">Listado de fotos</h2>
            { loading ?
                <p data-testid="loading-photos">loading...</p>
            :
                <ul style={{display:'flex', flexFlow:"row wrap"}} data-testid="photos-list">
                    { photos.length>0 ?
                        photos.map(photo=>(
                            <div key={photo.id} style={{ margin:"2px"}} data-testid={`image-card-${photo.id}`}>
                                <img src={`${photo.url}.jpeg`} style={{width:'50px', height:'50px',}}/>
                                <button onClick={()=>removeImg(photo.id)} data-testid="remove-btn">Eliminar</button>
                            </div>
                        ))
                    :
                        <p data-testid="no-results">No hay fotos</p>
                    }
                </ul>
            }
        </div>
    )
}