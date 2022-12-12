import React from 'react';
import './reviews.css';


const Reviews = () => {

    const reviews = [{ id: '12' }, { id: '442' }, { id: '13' }, { id: '12' }, { id: '442' }, { id: '13' }];

    const ReviewItem = (props: any) => (
        <div className='review-item'>
            <div className='review-comment'>
                "Lorem ipsum dolor sit amet. Eos accusantium consequatur aut eaque quis et rerum provident ab voluptatem doloribus aut facilis quasi non adipisci quasi ea blanditiis laudantium."
            </div>
            <div className='review-author'>
                Harry Webster
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