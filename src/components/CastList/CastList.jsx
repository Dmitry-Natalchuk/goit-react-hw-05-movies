import PropTypes from 'prop-types';

export const CastList = ({items}) => {
    return(
    <>
        <ul>
            {items.map(item => {
                const {id,profile_path,name} = item
                return(
                    <li key={id}>
                        <img src={'https://image.tmdb.org/t/p/w500' + profile_path} alt={name} />
                        <p>{name}</p>
                    </li>
                )
            })}
        </ul>
    </>
    )
}
CastList.propTypes = {
    credits: PropTypes.array.isRequired,
  };