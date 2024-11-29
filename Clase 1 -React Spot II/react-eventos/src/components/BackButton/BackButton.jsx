import { useEffect, useState } from "react"

export const BackButton = ()=>{
    const [visible, setVisible] = useState(false);

    const handleScroll = ()=>{
        console.log("scroll-pos", window.scrollY);
        if(window.scrollY>300){
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const handleToTop = ()=>{
        window.scrollTo({top:0, behavior:'smooth'});
    }

    useEffect(()=>{
        //Agregar el evento en el montaje del componente
        window.addEventListener('scroll', handleScroll);

        //Limpieza del evento en el desmontaje del componante
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    return(
        <>
            {
                visible &&
                <button style={styles.button} onClick={handleToTop}>Volver Arriba</button>
            }
        </>
    )
}

const styles = {
    button:{
        position:'fixed',
        bottom: '40px',
        right: '40px',
        width: '150px'
    }
}