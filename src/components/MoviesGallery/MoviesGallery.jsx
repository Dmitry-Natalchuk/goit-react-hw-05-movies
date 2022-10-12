import { MoviesItem } from "components/MoviesItem/MoviesItem";

export const MovieGallery = ({items}) => {
    return (
        <>
            <div>
                <ul>
                    {items.map(item => (
                        <MoviesItem key={item.id} {...item} />
                    ))}
                </ul>
            </div>
        </>
    );
   
}