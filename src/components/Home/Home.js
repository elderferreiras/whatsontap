import React, { Component } from 'react';
import LayoutHome from "../../hoc/LayoutHome/LayoutHome";
import Autocomplete from 'react-google-autocomplete';

class Home extends Component {
    placeSelectedHandler = (place) => {
        const queryParams = [];

        queryParams.push('a=' + encodeURIComponent(document.querySelector("[name=brewery]").value));
        queryParams.push('i=' + encodeURIComponent(place.place_id));

        this.props.history.push({
            pathname: '/search',
            search: queryParams.join('&')
        });
        console.log(place);
    };

    render() {
        return (
            <LayoutHome>
                <div className="masthead d-flex">
                    <div className="container text-center">
                        <h1 className="mb-1">What's on tap?</h1>
                        <h3 className="mb-4">
                            <p>Search for a brewery and found out now.</p>
                        </h3>
                        <Autocomplete
                            name="brewery"
                            placeholder="Type the name of a brewery or a local bar"
                            className="col-lg-6 col-sm-12 col-md-8"
                            onPlaceSelected={(place) => {
                                this.placeSelectedHandler(place)
                            }}
                            types={['establishment']}
                            componentRestrictions={{country: "us"}}
                        />
                    </div>
                </div>
            </LayoutHome>
        );
    }
}

export default Home;