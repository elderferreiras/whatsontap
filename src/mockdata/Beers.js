const BEERS = [
    {
        "id" : 42,
        "version" : 1,
        "abv" : "6.5",
        "active" : 1,
        "description" : "Deep red in color, this is a malty beer with bready toffee and caramel flavors. Low hop bitterness and low hop aroma round out the finish. 6% alcohol.",
        "ibu" : "",
        "url_image" : "streetfightangryhanks.png",
        "name" : "Street Fight Irish Red Ale"
    },
    {
        "id" : 43,
        "version" : 1,
        "abv" : "5.6",
        "active" : 1,
        "description" : "American-Style Wheat Beer with Yeast. Awards: Gold Medal - 2013 North American Beer Awards Silver Medal - 2014 World Beer Cup.",
        "ibu" : "15",
        "url_image" : "uberbrew.png",
        "name" : "White Noise"
    },
    {
        "id" : 44,
        "version" : 4,
        "abv" : "6.5",
        "active" : 1,
        "description" : "Loaded with massive hop flavors and aromas of sweet citrus, pine and tropical fruit with just enough malt backbone to keep it balanced, our IPA is imminently drinkable.",
        "ibu" : "75",
        "url_image" : "derailed_tap.png",
        "name" : "De-Railed IPA"
    },
    {
        "id" : 45,
        "version" : 2,
        "abv" : "6.00",
        "active" : 1,
        "description" : "Jack's 90 Scottish Ale is brewed in the proud Scottish tradition, using top quality English malts; as well as soft water, cool fermentation temperatures and proper aging. An amber/brown ale with a rich malty taste and a clean finish",
        "ibu" : "",
        "url_image" : "Jacks90ScottishAleRedLogdgeAles.jpeg",
        "name" : "Jack's 90 Scottish Ale"
    },
    {
        "id" : 47,
        "version" : null,
        "abv" : "5.0",
        "active" : null,
        "description" : "Light beer that features subtle aroma and malt character. This easy drinking ale has won 10 medals at National and International over the years. A Crisp and refreshing beer, perfect for any occasion.",
        "ibu" : "18",
        "url_image" : "Sandbagger.jpg",
        "name" : "Sandbagger Golden Ale "
    },
    {
        "id" : 48,
        "version" : null,
        "abv" : "5.2",
        "active" : null,
        "description" : "An unfiltered American-Style wheat ale with citrus notes and a malty sweetness that finishes clean on the palate. Served with a lemon, this beer won the triple crown of brewing in 2012 and has\r\nwon 15 national medals.",
        "ibu" : "16",
        "url_image" : "Whitetail.jpg",
        "name" : "Whitetail Wheat"
    },
    {
        "id" : 49,
        "version" : null,
        "abv" : "5.4",
        "active" : null,
        "description" : "The perfect balance of complex malt characteristics and hop profiles. Exceptional drinkability is what sets this beer apart with itâ€™s smooth caramel malts and dry finish.",
        "ibu" : "25",
        "url_image" : "Fatbelly.jpg",
        "name" : "Fatbelly Amber "
    },
    {
        "id" : 50,
        "version" : null,
        "abv" : "5.6",
        "active" : null,
        "description" : "A copper colored American-Style Pale Ale with medium bitterness. Full of citrus and piney notes thanks to the generous use of Pacific NW hop varieties. This beer has had an ardent following for years as well as winning 9 national medals.",
        "ibu" : "32",
        "url_image" : "Sharptail.jpg",
        "name" : "Sharptail Pale Ale "
    },
    {
        "id" : 51,
        "version" : null,
        "abv" : "5.2",
        "active" : null,
        "description" : "A delicious Oatmeal Stout that has a smooth, velvety mouth-feel that is sure to please everyone, stout drinkers and non-stout drinkers alike. Never had a stout before? This beer just may open the door to a whole new world of yummy deliciousness.",
        "ibu" : "28",
        "url_image" : "Custers-Last-Stout.jpg",
        "name" : "Custerâ€™s Last Stout "
    },
    {
        "id" : 53,
        "version" : null,
        "abv" : "6.0",
        "active" : null,
        "description" : "Copper made Industrial Kings in 1880â€™s Butte MT. The earthy fullness and smooth richness that hints of caramel and macadamia give way to chocolate notes that surprise the palate. Light copper malting with brisk carbonation makes for very interesting beer.",
        "ibu" : "12",
        "url_image" : "mbc_seasonal.jpg",
        "name" : "Clark & Daly Copper Ale"
    },
    {
        "id" : 54,
        "version" : null,
        "abv" : "6.0",
        "active" : null,
        "description" : "Rye grain and Simcoe hops added to this variation of the Lost Prospector IPA gives hop lovers the taste theyâ€™re yearning for. Aroma hops, Chinook, Centennial, and bitterness hops, Glacier, Liberty, Cascade, and rye malts make for a bold yet refreshing IPA experience.",
        "ibu" : "89",
        "url_image" : "mbc_seasonal.jpg",
        "name" : "Grubstake IPA"
    },
    {
        "id" : 55,
        "version" : null,
        "abv" : "5.4%",
        "active" : null,
        "description" : "Roasted Cinderella pumpkins seasoned with brown sugar, cinnamon and cloves are incorporated into the mash, rounding out the additions to the kettle are a mixture of pumpkin pie spices and more pumpkin!! A perfect blend of pumpkin and spice make this beer a slice of harvest-time heaven!",
        "ibu" : "20",
        "url_image" : "mbc_seasonal.jpg",
        "name" : "Drunkâ€™n Pumpkin Ale"
    },
    {
        "id" : 56,
        "version" : null,
        "abv" : "5",
        "active" : null,
        "description" : "Our Whitetail Wheat infused with Huckelberry flavor and  aroma. Fruity goodness at itâ€™s best!",
        "ibu" : "16",
        "url_image" : "mbc_seasonal.jpg",
        "name" : "Huckleberry Wheat"
    },
    {
        "id" : 57,
        "version" : null,
        "abv" : "5.0",
        "active" : null,
        "description" : "Dark & Dry's assertive tartness is pleasingly balanced by a hint of molasses and brown sugar. More rounded and intricate than its sister ciders, this potion will appeal to beer aficionados, wine devotees, and cider enthusiasts alike.  ",
        "ibu" : "",
        "url_image" : "cider.png",
        "name" : "Spire Mountain Dark & Dry Cider"
    },
    {
        "id" : 58,
        "version" : null,
        "abv" : "5.5",
        "active" : null,
        "description" : "Billings most award winning beer for 2015! NABA 2015 Gold Medal and GABF 2015 Bronze Medal. This beer offers medium hoppiness and medium caramel notes for a very quaffable salute to Billings Best Sports Bar, Hooligans.",
        "ibu" : "27",
        "url_image" : "hooligans.jpg",
        "name" : "Hooliganâ€™s Irish Red Ale"
    },
    {
        "id" : 59,
        "version" : null,
        "abv" : "4.0",
        "active" : null,
        "description" : "Our lightest beer. Gold in color with a bready, light fruity flavor. Its low alcohol content and restrained bitterness make this a great session beer. 4% alcohol.",
        "ibu" : "",
        "url_image" : "blondealeangryhanks.png",
        "name" : "Angry Hank's Blonde Ale"
    },
    {
        "id" : 60,
        "version" : null,
        "abv" : "4.0",
        "active" : null,
        "description" : "An American take on a Belgian style wheat beer. Made with barley, wheat, and oats. It is infused with coriander and Curacao orange peel. This is a hazy, light-bodied, slightly tangy ale with low hop bitterness. 4% alcohol.",
        "ibu" : "",
        "url_image" : "anger_management_angry_hanks.png",
        "name" : "Anger Management Belgian Wheat"
    },
    {
        "id" : 61,
        "version" : null,
        "abv" : "6.0",
        "active" : null,
        "description" : "A rich copper color with a dry palate. The sharp bitterness and hop flavor and aroma come from cascade and centennial hops. This beer is definitely not for the faint of heart. 6% alcohol.",
        "ibu" : "",
        "url_image" : "head-trauma_angry_hanks.png",
        "name" : "Head Trauma Indian Pale Ale"
    },
    {
        "id" : 62,
        "version" : null,
        "abv" : "5.0",
        "active" : null,
        "description" : "Deep brown in color with a malty aroma. Hints of caramel, dark chocolate and coffee are reflected in the flavor. A moderate hop edge adds balance to this brown ale. 5% alcohol.",
        "ibu" : "",
        "url_image" : "IMG_6173-Edit-Dog-Slobber-vertangryhanks.jpg",
        "name" : "Dog Slobber Brown Ale"
    }
];

export default BEERS;