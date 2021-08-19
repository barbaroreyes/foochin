import React, {
  useContext,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import { PlateContext } from '../context/plates';

const Plates = () => {
    const { plates } = useContext(PlateContext);
    const [searchName,setSearchName]= useState('')
   
    
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
            placeholder="plato"
            onChange={(e) =>setSearchName(e.target.value)}
            />
            
            </div>
            {plates.filter(item =>{
            if(searchName ==='' ){
             return  item
            }
            else if(item.name.toLowerCase().includes(searchName.toLowerCase())) {
             return item
            }
            
            }).map(({ image: image, id, name }) => (
                <article key={id} className="plate ma4 pa3 grow shadow-5">
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
