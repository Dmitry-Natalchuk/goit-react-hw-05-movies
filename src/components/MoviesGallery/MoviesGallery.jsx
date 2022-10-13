import { MoviesItem } from "components/MoviesItem/MoviesItem";
import s from "./MoviesGallery.module.css"

export const MovieGallery = ({items}) => {
    return (
        <>
            <div className={s.container}>
                <ul className={s.gallery}>
                    {items.map(item => (
                        <MoviesItem key={item.id} {...item} />
                    ))}
                </ul>
            </div>
        </>
    );
   
}