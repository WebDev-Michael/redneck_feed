import category from "../data/categories.json";
import { Link } from 'react-router-dom';

export default function CategorySection () {

    return (
        <div className="flex card-section border category bg-darkgray">
            {category && category.map((cat, index) => (
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