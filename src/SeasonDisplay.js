import React from 'react';
import "./SeasonDisplay.css";

// to avoid repetition on line 21 and 22
const seasonConfig = {
	summer: {
		text: "Let's it the beach",
		iconName: 'sun',
	},
	winter: {
		text: 'Burr, it is chilly',
		iconName: 'snowflake',
	}
};

// function to determine the season
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'winter' : 'summer';
	} else {
		return lat < 0 ? 'summer' : 'winter';
	}
};


const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[ season ]; // {text, iconName}
	// const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets it the beach';
	// const icon = season === 'winter' ? 'snowflake' : 'sun';
	return (
		<div className={ `season-display ${season}` }>
			<i className={ `icon-left massive ${iconName} icon` } />
			<h1>{ text }</h1>
			<i className={ `icon-right massive ${iconName} icon` } />
		</div>
	);
};

export default SeasonDisplay;
