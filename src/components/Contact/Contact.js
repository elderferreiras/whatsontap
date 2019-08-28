import React from 'react';
import LayoutHome from "../../hoc/LayoutHome/LayoutHome";

const contact = () => {
    return (
        <LayoutHome>
            <section className="content-section text-center" id="services">
                <div className="container">
                    <div className="content-section-heading">
                        <h2 className="mb-5">Contact</h2>
                    </div>
                    <div className="row">
                        <div className="col align-self-center">
                            <p className="text-faded mb-5">
                                <iframe
                                    title="contact-form"
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSchuu6CI2xpZAh5z7PMkrV6xUyRL9BQ-kwHZPXMiIR62-_Vpw/viewform?embedded=true"
                                    width="100%" height="790" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                                </iframe>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutHome>
    );
};

export default contact;
