import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
    return (
        <ul>
            {reviews.map(review => {
                const {id,author,content} = review
                return(
                <li key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                </li>
                )
            })}
        </ul>
    )
}
ReviewsList.propTypes = {
    reviews: PropTypes.array.isRequired,
  };