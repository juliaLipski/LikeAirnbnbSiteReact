import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

export default ({ id, countryId, imgUrl, rating, name, reviews, price, cityId }) => {
    const getRen = (rating => rating * 5 / 100);
    const rt = getRen(rating);

    const spanstyle = {
        fontSize: "1.5rem",
    }
    return (
        <div>
            <Link to={`/item/${id}`}>
                <div className="card cell hvr-float">
                    <div className="row ">
                        <div className="card-img-top col-lg-12">
                            <div className="price d-flex justify-content-center">
                                <p className="d-flex align-items-center">{price}</p>
                            </div>
                            <img className="img" src={imgUrl} alt="foto" />
                        </div>
                    </div>
                    <div className="card-block ">
                        <div className="row d-flex ">
                            <div className="col-lg-6 col-md-8">

                                <h4>{name}</h4>
                                <p> {countryId}</p>
                                <p>city:{cityId}</p>
                            </div>
                            <div className="col-lg-6 col-md-4">
                                <span style={spanstyle}>
                                    <StarRatingComponent
                                        name="rate2"
                                        editing={false}
                                        starCount={5}
                                        value={rt}
                                        isAggregateRating={true}
                                        ignoreInlineStyles={false}
                                    />
                                </span>
                            </div>
                            <div className="col-lg-9 col-md-3 text-muted">
                                <p>(views:{reviews})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}