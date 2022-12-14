import './reviews.css';
import image from '../../assets/images/person.png';


const Reviews = () => {

    const reviews = [{ id: '12' }, { id: '442' }, { id: '13' }, { id: '12' }, { id: '442' }, { id: '13' }];

    const ReviewItem = (props: any) => (
        <div className='review-item'>
            <div className='review-comment'>
                "Lorem ipsum dolor sit amet. Eos accusantium consequatur aut eaque quis et rerum provident ab voluptatem doloribus aut facilis quasi non adipisci quasi ea blanditiis laudantium."
            </div>
            <div className='review-author'>
                <img className="review-image" src={image} alt={'name'} />
                <span>Harry Webster</span>
            </div>
        </div>
    )

    return (
        <div id='reviews' className='reviews'>
            <div className='reviews-title'> What customer says </div>
            <div className='review-container'>
                {reviews.map((review) => <ReviewItem review={review} />)}
            </div>
        </div>
    )
}

export default Reviews