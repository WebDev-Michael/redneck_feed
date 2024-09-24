import { useFetchData } from './hooks';
import { Link } from 'react-router-dom';

export default function CategorySection () {
    const { data, error} = useFetchData('/categories')

    if(error) return <p>Error: { error } </p>;

    return (
        <div className="flex card-section border category bg-darkgray">
            {data && data.map((cat, index) => (
                <div key={index} className='home-card flex centered border'>
                    <Link to={cat.url}>
                        <img src={cat.categoryCardImage} alt={cat.categoryName} className="card-img" style={{}}/>
                        <h2 className="centered bold">{cat.categoryName}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

