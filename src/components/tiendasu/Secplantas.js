import './Plantas.css';
import Plantas from './Plantas';
import img1 from './eche1.png'
import img2 from './i19.png'
import img3 from './purple.png'
import img4 from './i14.png'
import img5 from './i6.png'
import img6 from './i18.png'
import img7 from './i20.png'
import img8 from './i12.png'



const plantas=[
    {
        id:1,
        imagen:img3,
        title:'ECHEVERRIA PURPLE',
    },

    {
        id:2,
        imagen:img1,
        title:'ECHEVERRIA MISTERY',
    },

    {
        id:3,
        imagen:img2,
        title:'ECHEVERRIA TAURUS',
    },

    {
        id:4,
        imagen:img5,
        title:'ECHEVERRIA OVI-FERUM',
    },

    {
        id:5,
        imagen:img6,
        title:'ECHEVERRIA COSTARY',
    },

    {
        id:6,
        imagen:img7,
        title:'ECHEVERRIA AGAVOIDES',
    },

    {
        id:7,
        imagen:img4,
        title:'ECHEVERRIA PERLE-VON',
    },

    {
        id:8,
        imagen:img8,
        title:'ECHEVERRIA OVI-FERUM',
    },
]

function Secplantas(){
    return(
        <section id="plantas" className="container-fluid">
            <h2>ECHEVERRIAS</h2>

            <div className="row">
            {
             plantas.map(plant=>(
                 <div className="col-12 col-md-3" key={plant.id}>
                     <Plantas imageplant={plant.imagen} titulo={plant.title} />
                     
                 </div>    

             ))
            }       

            </div>
            <hr></hr>


        </section>
    );
}
export default Secplantas;