import './Search.scss';
import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import LayoutSearch from '../../hoc/LayoutSearch/LayoutSearch';
import Results from '../../components/Results/Results';
import Loading from '../../components/UI/Loading/Loading';
import axios from 'axios';

class Search extends Component {
    state = {
        results: null,
        placeId: null,
        loading: false
    };

    componentDidMount() {
        this.resultsHandler();
    }

    resultsHandler = () => {
        const query = new URLSearchParams(this.props.location.search);

        let placeId = null;
        let address = null;

        for (let param of query.entries()) {
            if (param[0] === 'i') {
                placeId = param[1];
            } else if (param[0] === 'a') {
                address = param[1];
            }
        }

        if (placeId && address) {
            document.querySelector("[name=brewery]").value = address;
            this.setState({loading: true});
            axios.get('?uid=' + placeId).then(res => {
                if (res.data.input) {
                    const results = res.data.input.map(beer => {
                        return {
                            id: beer.id,
                            name: beer.name,
                            description: beer.description,
                            abv: beer.abv,
                            ibu: beer.ibu
                        };
                    });

                    this.setState({results: results});

                } else {
                    this.setState({results: null});
                }
            }).catch(res => {
                this.setState({results: null});
            }).finally(res => {
                this.setState({placeId: placeId, loading: false});
            });

        }
    };

    placeSelectedHandler = (place) => {
        const queryParams = [];

        queryParams.push('a=' + encodeURIComponent(document.querySelector("[name=brewery]").value));
        queryParams.push('i=' + encodeURIComponent(place.place_id));

        this.props.history.push({
            pathname: '/search',
            search: queryParams.join('&')
        });

        this.resultsHandler();
    };

    changeHandler = (event) => {
        const value = event.target.value;

        if (value.length === 0) {
            this.setState({'results': null});
        }
    };

    render() {
        let results = <p className="lead mb-5 text-left">No results found for this search.</p>;

        if (this.state.loading) {
            results = <Loading/>;
        }

        if (this.state.results && this.state.results.length) {
            results = <Results results={this.state.results}/>;
        }

        return (
            <LayoutSearch>
                <section className="content-section bg-light" id="about">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="search-bar">
                                    <Autocomplete
                                        name="brewery"
                                        placeholder="Type the name of a brewery or a local bar"
                                        className="col-lg-11 mx-auto"
                                        onPlaceSelected={(place) => {
                                            this.placeSelectedHandler(place)
                                        }}
                                        onChange={this.changeHandler}
                                        types={['establishment']}
                                        componentRestrictions={{country: "us"}}
                                        style={{cursor:'pointer'}}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h2 className="text-left" style={{marginTop: '10px'}}>Search Results</h2>
                                <hr/>
                                {results}
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSearch>
        );
    }
}

export default Search;
