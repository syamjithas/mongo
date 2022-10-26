var sortOptions = [
	{
		"label": "Nearest",
		"key": "bylocation",
		"type": "range",
		"min": 0,
		"max": 500,
		"unit": "km"
	},
	{
		"label": "Age",
		"key": "age",
		"type": "range",
		"min": 21,
		"max": 60,
		"unit": "Year"
	},
	{
		"label": "Height",
		"key": "height", // * 
		"type": "range",
		"min": 120, // * 
		"max": 21, // * 
		"unit": "cm"
	},
	{
		"label": "Recently joined",
		"key": "recentlyJoined",
		"type": "single"
	},
	{
		"label": "Recently active",
		"key": "recentlyActive",
		"type": "single"
	}
]