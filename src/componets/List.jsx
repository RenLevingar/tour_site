
const List = ({locations, remove}) => {
    return (
        <div>
            {locations.map(location =>{
                const {id,name,info,image, price} = location;
                return(
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div style={{position: "relative"}}>
                            <h4><em>{name}</em></h4>
                            <p>{info}</p>
                            <p>Cost: ${price}</p>
                            <button 
                            onClick={() => {
                                remove(id);
                            }}
                            >Not Intrested</button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
  }
  
  export default List