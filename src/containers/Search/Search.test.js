import {Search} from "./Search";
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Autocomplete from 'react-google-autocomplete';
import Loading from '../../components/UI/Loading/Loading';
import Results from '../../components/Results/Results';

configure({adapter: new Adapter()});

describe('<Search/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Search location={{search: null}}/>);
    });

    it('should render <Autocomplete/>', () => {
        expect(wrapper.find(Autocomplete)).toHaveLength(1);
    });

    it('should render <Loading/>', () => {
        wrapper.setProps({loading: true});
        expect(wrapper.find(Loading)).toHaveLength(1);
    });

    it('should nout render <Loading/>', () => {
        wrapper.setProps({loading: false});
        expect(wrapper.find(Loading)).toHaveLength(0);
    });

    it('should render <Results/>', () => {
        wrapper.setProps({
            results: [
                {
                    id: 'ea319ba2-ae51-41e2-b350-a57219d0eb47',
                    name: 'Hank Unplugged',
                    description: 'Hank lost his mind on this summer shandy. Real lemonade is mixed with our blond ale and the result is pure sunshine and butterflies. 4.8% alcohol.',
                    abv: 4,
                    ibu: ''
                },
                {
                    id: 'ae7f751e-0bb7-4a24-9657-f0a2b9989b37',
                    name: 'Helles Lager',
                    description: 'Carter\'s Brewing',
                    abv: 4.8,
                    ibu: 20
                },
                {
                    id: '169c069b-eb17-4a6f-8bdd-a7dc40228797',
                    name: 'Jack\'s 90 ',
                    description: 'Jack\'s 90 Scottish Ale is brewed in the proud Scottish tradition, using top quality English malts; as well as soft water, cool fermentation temperatures and proper aging. An amber/brown ale with a rich malty taste and a clean finish.',
                    abv: 6,
                    ibu: ''
                },
                {
                    id: 'cbd774b0-619f-4061-9342-e8abc556d643',
                    name: 'Derailed IPA',
                    description: 'Carter\'s Brewing\'s best selling beer boasts a massive hop profile and rich English malts for a very balanced drinkable IPA.',
                    abv: 6.5,
                    ibu: 75
                },
                {
                    id: '3051c372-e66b-4113-a7b2-ff043c35cd6b',
                    name: 'Street Fight',
                    description: 'Irish Read Ale from Angry Hank\'s. Deep red in color, this is a malty beer with bready toffee and caramel flavors. Low hop bitterness and low hop aroma round out the finish. 6% alcohol.',
                    abv: '',
                    ibu: ''
                },
                {
                    id: 'f49fe466-96d5-4c04-b1ff-1fef450aef27',
                    name: 'White Noise',
                    description: 'American style wheat ale from Uberbrew. ',
                    abv: 5.7,
                    ibu: 15
                }
            ]
        });

        expect(wrapper.find(Results)).toHaveLength(1);
    });
});
