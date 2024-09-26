import React from 'react';
import { useEffect, useState } from 'react'

function FeedbackComponent() {

    const [publicSiteFeedbacks, setPublicSiteFeedbacks] = useState(null)

    useEffect(() => {
        const fetchPublicSiteFeedbacks = async () => {
            const response = await fetch(`/api/site-feedbacks/public`)
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setPublicSiteFeedbacks(json)
            }
        }

        fetchPublicSiteFeedbacks()
    }, [])

    return (
        <div class="ltn__testimonial-area section-bg-1 pt-115 pb-70">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-area ltn__section-title-2 text-center">
                            <h1 class="section-title">Clients Feedbacks<span>.</span></h1>
                        </div>
                    </div>
                </div>
                <div class="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
                    {publicSiteFeedbacks && publicSiteFeedbacks.map((siteFeedback) => (
                        <div class="col-lg-12" id={siteFeedback._id}>
                            <div class="ltn__testimonial-item ltn__testimonial-item-4">
                                <div class="ltn__testimoni-info">
                                    <p>{siteFeedback.feedback}</p>
                                    <h4>{siteFeedback.name}</h4>
                                </div>
                                <div class="ltn__testimoni-bg-icon">
                                    <i class="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeedbackComponent;