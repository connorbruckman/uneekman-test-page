import React from 'react';

function WhatToExpect() {


    return (
        <div className="section">
			<div className="container">

					<div className="my-auto">
						<div className="text-center container py-2">
							<h2 className="text-black h4 heading">What to expect</h2>
                            <hr />
							<p>Our in-network physicians will evaluate which (if any) ED treatment is appropriate for you. Then we'll ship it to you in discreet, unmarked packaging.</p>
						</div>

                        <div className='row justify-content-center'>
                            <div className="d-flex mb-3 service-alt col-md-3 col-sm card pt-3" >
                                <div className='text-center'>
                                    <h3>Initial Treatment</h3>
                                    <hr />
                                    <p>Many people get results the first time they use the medication. For some, it can take 2-3 uses to see results.</p>
                                </div>
                            </div>

                            <div className="d-flex mb-3 service-alt col-md-3 col-sm card pt-3 mx-3">
                                <div className='text-center'>
                                    <h3>Prolonged Treatment</h3>
                                    <hr />
                                    <p>If you still don’t see results, your doctor may be able to increase your dose or switch you to a different medication. This is not uncommon.</p>
                                </div>
                            </div>

                            <div className="d-flex mb-3 service-alt col-md-3 col-sm card pt-3">
                                <div className='text-center'>
                                    <h3>Side Effects with Treatment</h3>
                                    <hr />
                                    <p>If you experience side effects, message your doctor and they'll help determine if a different medication or dose is better for you. </p>
                                </div>
                            </div>
                        </div>


					</div>


			</div>
		</div>
    );
};

export default WhatToExpect;