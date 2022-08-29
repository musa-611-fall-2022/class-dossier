In this mini-project, you are going to add information about yourself to the class dossier.

## Pre-requisites

- A GitHub account
- A portfolio. If you don't have one already, set one up on GitHub Pages.
- A git client installed on your computer. This could be the `git` command line tool, or the GitHub desktop cient, or some git capability in your code editor.

## Steps

1. Fork this repository to your account
1. Clone the repository to your commputer
1. Find the files in the _site/data/_ folder with your name. There should be one HTML file and one JSON file.
2. In the JSON file, fill in data about yourself. Your JSON file should contain the following attributes:
   - `preferred_name`: (`string`) -- what you prefer people call you
   - `pronouns`: (`string`) -- your preferred pronouns
   - `picture_url`: (`string`) -- the path to a picture of you (should be a maximum of 1MB in size). You should add the picture to the _site/images/_ folder.
   - `github_username`: (`string`) -- your username on GitHub
   - `portfolio_url`: (`string`) -- the URL to your portfolio (on GitHub Pages or elsewhere)
   - `hometown`: (`string`) -- the name of your home town (whatever that means to you)
   - `hometown_center`: (`GeoJSON Point`) -- a GeoJSON point representation of the center of your hometown
   - `hometown_zoom`: (`number`) -- the zoom level that shows your home town most clearly in the map (lower values zoom out, higher values zoom in)
   - `os`: (`string`) -- which operating system you will be using for class work (one of the following: `"Windows"`, `"MacOS"`, `"Linux"`, `"Android"`, `"iOS"`, `"ChromeOS"`)
   - `browser`: (`string`) -- which browser you use most frequently in the OS above (one of the following: `"Chrome"`, `"Firefox"`, `"Edge"`, `"Exlorer"`, `"Opera"`, `"Safari"`)
3. In the HTML file, answer the prompts in paragraph format. There are two sections that I've added, and you should add one more (could be hobbies, or music preferences, or whatever you'd like).

You will submit your information by opening a pull request (PR) on GitHub. When you do, your PR will be subject to several automated tests for style (using eslint) and content (using jest).

## Resources

### Linting
* There are a number of rule sets for linting. We're using a custom set on top of
ES Lint's recommended set.
https://betterprogramming.pub/comparing-the-top-three-style-guides-and-setting-them-up-with-eslint-98ea0d2fc5b7

### JS Mapping Libraries
* Comparison of popular JS mapping libraries: https://www.geoapify.com/map-libraries-comparison-leaflet-vs-mapbox-gl-vs-openlayers-trends-and-statistics
* Carto's response to Mapbox making their JS library proprietary: https://carto.com/blog/our-thoughts-as-mapboxgl-js-2-goes-proprietary/

### Web Map Zoom Levels
* Leaflet's documentation on zoom levels: https://leafletjs.com/examples/zoom-levels/

### GeoJSON
* More than you ever wanted to know about GeoJSON: https://macwright.com/2015/03/23/geojson-second-bite.html
* Introduction to Web Mapping chapter on GeoJSON: http://132.72.155.230:3838/js/geojson-1.html

## Acknowledgements
* "_blurryperson1.jpg" from https://www.istockphoto.com/photo/blurry-silhouette-man-with-bokeh-sea-background-black-and-white-gm1073388114-287305122
* "_blurryperson2.jpg" from https://www.wallpaperflare.com/black-and-white-blur-blurred-blurry-one-person-adult-silhouette-wallpaper-hdavg
* "_blurryperson3." from https://www.wired.com/2016/07/paolo-cirio-obscurity/

