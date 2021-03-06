import React from 'react';
import LayoutHome from "../../hoc/LayoutHome/LayoutHome";

const about = () => {
    return (
        <LayoutHome>
            <section className="content-section text-center" id="services">
                <div className="container">
                    <div className="content-section-heading">
                        <h2 className="mb-5">About</h2>
                    </div>
                    <div className="row" style={{backgroundColor: '#0000006b', paddingTop: '20px', paddingBottom: '20px'}}>
                        <div className="col align-self-center">
                            <p className="text-faded mb-5 text-left">
                                If you ever wondered what's on tap before going to a brewery, you're in the right
                                place. <em>What's on tap?</em> is a list of all American breweries and their beers.
                            </p>
                            <p className="text-faded mb-5  text-left">
                                If by any chance you cannot find your favorite brewery in here, come back later. We're currently working on it. If you would like to help getting the beers list updated, let us know.
                            </p>
                            <p className="text-faded mb-5  text-left">
                                Also, stay tuned for the mobile app.
                            </p>
                            <p className="text-faded mb-0 text-right">
                              Elder Patten Ferreira
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutHome>
    );
};

export default about;
