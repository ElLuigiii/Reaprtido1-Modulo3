function Prueba (props){
    return(
        
            <div className='estiloPrueba'>
                <img className="imgCard" src={props.imgUrl}/>
                <div className="contenido">
                    <p className="parrafoCard">{props.nombre}</p>
                    <p className="parrafoCard">{props.edad}</p>
                </div>
            </div>
        
    )
}

const bichitos=[
{   id:1,
    nombre:"Shoana", 
    imgn:"https://randomuser.me/api/portraits/women/10.jpg",
    edad: "18 años"
},

{   id:2,
    nombre:"Juan",
    imgn:"https://randomuser.me/api/portraits/men/8.jpg",
    edad: "18 años"

},

{   id:3,
    nombre:"Claudio", 
    imgn:"https://randomuser.me/api/portraits/men/10.jpg",
    edad: "18 años"
},

{   id:4,
    nombre:"Fernando", 
    imgn:"https://randomuser.me/api/portraits/women/9.jpg",
    edad: "18 años"
},
{   id:5,
    nombre:"Yolanda", 
    imgn:"https://randomuser.me/api/portraits/women/39.jpg",
    edad: "18 años"
},

{   id:6,
    nombre:"Joaquina", 
    imgn:"https://randomuser.me/api/portraits/women/19.jpg",
    edad: "18 años"
}
] 

 function Lista(datos){
    return(
        <>
        {datos.array.map((cerdito)=>{
            const {nombre, imgn,id, edad}= cerdito;
            return (
                <Prueba nombre={nombre} imgUrl ={imgn} edad={edad} key={id}/>
            )
        })}
        </>
    )
}

export default function App() {
return (
    < >
    <div className="titulo">
        <h1>Practico nº1</h1>
        <h2>Modulo 3</h2>
    </div>    
    <div className="context">
        <Lista array={bichitos}/>
    </div>
    </>
)
}
 