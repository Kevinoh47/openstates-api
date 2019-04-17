'use strict';
const axios = require('axios');
const JurisdictionsController = {
	index: ( args ) => {
    const URL = `https://openstates.org/graphql/${ args.jurisdiction || 'javascript' }.json`;
    // const config = 
		return axios.post( URL ) //axios.post(url[,data[,config]])
			.then( (response) => {
				const __jurisdictions = [];
				const jurisdictions = response.data.data.children;
				jurisdictions.map( jurisdiction => {
					jurisdiction.data.content = jurisdiction.data.selftext_html;
					__jurisdictions.push( __jurisdiction.data );
				} );
				return __jurisdictions;
			})
			.catch( (error) => {
				return { error: error }
			});
	}
}
module.exports = JurisdictionsController;