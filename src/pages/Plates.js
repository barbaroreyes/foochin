import React, { useContext ,useState} from 'react'
import { Link } from "react-router-dom";
import { PlateContext } from '../context/plates';


const Plates = () => {
    const { plates } = useContext(PlateContext);
    const [searchName,setSearchName]= useState('')
    const [searByCategory,setSearByCategory]= useState('Aperitivos')
    
    if (!plates.length) {
        return <h3>No Plates Available</h3>
    }
    const filterByCategory= (category)=>{
        const filtered = plates.filter(item => item.category === category)
       console.log('filtered',filtered)
    }
    return (
        <section className="plates">
           <div className="filter">
            <label>Encuentra tu Plato</label>
            <input type="text" 
            placeholder="plate"
            onChange={(e) =>setSearchName(e.target.value)}
            />
            {/* <div className='buttons-div'>
                <div>
                <select 
                onChage = {(e)=> {
                    const selectCategory = e.target.value
                    setSearByCategory(selectCategory)
                }}
                >
                <option value= 'aperitivos'>Aperitivos</option>
                <option value = 'principales'>Principales</option>
                <option value= 'segundos'>Segundos</option>
                </select></div>
               {searByCategory}
            
            </div> */}
            </div>
            {plates.filter(item =>{
            if(searchName ==='' ){
             return  item
            }
            else if(item.name.toLowerCase().includes(searchName.toLowerCase())) {
             return item
            }
            
            }).map(({ image: image, id, name }) => (
                <article key={id} className="plate grow shadow-5">
                    <div className="plate-image">
                        <img src={image} alt={name} />
                    </div>
                      <span>{name}</span>

                    <Link to={`plates/${id}`} className="btn bg-black book-link">ver mas</Link>
                </article>
            ))}
        </section>
    )
}

export default Plates
