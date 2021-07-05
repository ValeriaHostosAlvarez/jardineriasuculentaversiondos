import './Plantas.css';
import Plantas from './Plantas';
import img11 from './pep.png'
import img12 from './i22.png'
import img13 from './i23.png'
import img14 from './i29.png'
import img15 from './i25.png'
import img16 from './i24.png'
import img17 from './plant.png'
import img18 from './i27.png'



const plantas=[
    {
        id:11,
        imagen:img11,
        title:'CRASULA PEPPER',
    },

    {
        id:12,
        imagen:img12,
        title:'CRASSULA OVATA',
    },

    {
        id:13,
        imagen:img13,
        title:'CRASSULA TENELLI',
    },

    {
        id:14,
        imagen:img14,
        title:'CRASSULA STAHLI',
    },

    {
        id:15,
        imagen:img15,
        title:'CRASSULA CAMPFIRE',
    },

    {
        id:16,
        imagen:img16,
        title:'CRASSULA DECEPTOR',
    },

    {
        id:17,
        imagen:img17,
        title:'CRASSULA RUFESCENS',
    },

    {
        id:18,
        imagen:img18,
        title:'CRASSULA BURRITO',
    },
]

function Secplantas2(){
    return(
        <section id="plantas" className="container-fluid">
            <h2>CRASSULAS</h2>

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
export default Secplantas2;