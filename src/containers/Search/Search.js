import './Search.scss';
import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import LayoutSearch from '../../hoc/LayoutSearch/LayoutSearch';
import Results from '../../components/Results/Results';
import Loading from '../../components/UI/Loading/Loading';
import {fetchOrders} from "../../store/search/actions";
import {connect} from 'react-redux';

export class Search extends Component {
    componentDidMount() {
        this.fetchResults();
    }

    fetchResults = () => {
        let {id, address} = this.getIdAnAddress();

        if (id && address) {
            document.querySelector("[name=brewery]").value = address;

            this.props.fetchResults(id);
        }
    };

    getIdAnAddress() {
        const query = new URLSearchParams(this.props.location.search);

        let id = null;
        let address = null;

        for (let param of query.entries()) {
            if (param[0] === 'i') {
                id = param[1];
            } else if (param[0] === 'a') {
                address = param[1];
            }
        }
        return {id, address};
    }

    placeSelectedHandler = (place) => {
        const queryParams = [];
        const address = document.querySelector("[name=brewery]").value;
        queryParams.push('a=' + encodeURIComponent(address));
        queryParams.push('i=' + encodeURIComponent(place.place_id));

        this.props.history.push({
            pathname: '/search',
            search: queryParams.join('&')
        });

        this.fetchResults();
    };

    changeHandler = (event) => {
        const value = event.target.value;

        if (value.length === 0) {
            this.setState({'results': null});
        }
    };

    render() {
        let results = <p className="lead mb-5 text-left">No results found for this search.</p>;

        if (this.props.loading) {
            results = <Loading/>;
        }

        if (this.props.results && this.props.results.length) {
            results = <Results results={this.props.results}/>;
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

const mapStateToProps = (state) => {
    return {
        loading: state.search.loading,
        results: state.search.results,
        id: state.search.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchResults: (id) => dispatch(fetchOrders(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
