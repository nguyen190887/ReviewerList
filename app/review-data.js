System.register([], function(exports_1) {
    var ReviewData;
    return {
        setters:[],
        execute: function() {
            (function (ReviewData) {
                ReviewData.REVIEWLIST = [
                    {
                        id: 1,
                        name: 'Super women',
                        reviewers: [
                            { id: 101, name: 'Anna', email: 'Anna@mail.com', devType: 'BEE' },
                            { id: 102, name: 'Juliet', email: 'Juliet@mail.com', devType: 'FED' }
                        ],
                        selected: false,
                        workingProduct: 'Vehicle',
                        manager: 'The big one'
                    },
                    {
                        id: 2,
                        name: 'Advertiser',
                        reviewers: [
                            { id: 201, name: 'Rafael', email: 'Rafael@mail.com', devType: 'BEE' },
                            { id: 203, name: 'Josh', email: 'josh@mail.com', devType: 'FED' }
                        ],
                        selected: false,
                        workingProduct: 'Ads',
                        manager: 'Cowboys'
                    }
                ];
            })(ReviewData = ReviewData || (ReviewData = {}));
            exports_1("ReviewData", ReviewData);
        }
    }
});
//# sourceMappingURL=review-data.js.map