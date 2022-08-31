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

You will submit your information by opening a pull request (PR) on GitHub.

## Testing your code

When you submit your code, your PR will be subject to several automated tests for style (using eslint) and content (using jest). So, before submitting, it may be in your interest to test your changes on your computer. There are a few ways you can do this, and they will all involve installing [node.js](https://nodejs.org/).

Once you've installed node, install the requirements for this project. Those requirements are listed in the file _package.json_ under the `devDependencies` section, but to install them you just have to open the repository folder in a terminal and run:

```bash
npm install --include dev
```

You'll only have to do that once for each project you work on. Now you can choose one (or both) of the following ways to test your changes.

1. If you want to test your changes in a web browser, you'll want to start a web server on your computer. To do that, run the following from your repository folder:

   ```bash
   npx http-server
   ```

   You should see some output that looks something like:

   ```
   Starting up http-server, serving ./

   ...

   Available on:
   http://127.0.0.1:8080
   http://192.168.1.201:8080
   http://172.17.0.1:8080
   Hit CTRL-C to stop the server
   ```

   Once you see that, you can go to `http://127.0.0.1:8080/site/` or `http://localhost:8080/site/` in your browser ("localhost" is usually just an alias for the address "127.0.0.1", which is almost always the address of the computer you're on now).

   Scroll to your picture and click to open it. Does it work? Is the JavaScript console free of errors? If so, that's a good sign.

2. If you want to test your changes against the same tests that will run on GitHub when you submit your code, then **modify the following command (replace everywhere that it says `mjumbepoe` with the name of your files)** and run the whole command in your terminal:

   ```bash
   ADDED_FILES='["site/images/mjumbepoe.jpg"]' \
   MODIFIED_FILES='["site/data/mjumbepoe.json", "site/data/mjumbepoe.html"]' \
   REMOVED_FILES='[]' \
   npm test
   ```

   If everything's correct you'll see something like:

   ```
   PASS  __tests__/test_correct_files_changed.js
     The changed files
       ✓ should include exactly one HTML file in the data folder (1 ms)
       ✓ should include exactly one JSON file in the data folder (1 ms)
     The added files
       ✓ should include at least one picture in the images folder
       ✓ should not include files in any other folder besides images
     The removed files
       ✓ should be empty (1 ms)
     The modified JSON file
       ✓ should contain the attribute preferred_name (12 ms)
       ✓ should contain the attribute pronouns (1 ms)
       ✓ should contain the attribute picture_url
       ✓ should contain the attribute github_username (1 ms)
       ✓ should contain the attribute portfolio_url (1 ms)
       ✓ should contain the attribute hometown (1 ms)
       ✓ should contain the attribute hometown_center (1 ms)
       ✓ should contain the attribute hometown_zoom (2 ms)
       ✓ should contain the attribute os (2 ms)
       ✓ should contain the attribute browser (1 ms)
       ✓ should contain a GeoJSON point in the hometown_center attribute (3 ms)
     The added image(s)
       ✓ should not be more than 1MB each
     
   Test Suites: 1 passed, 1 total
   Tests:       17 passed, 17 total
   Snapshots:   0 total
   Time:        0.367 s, estimated 1 s
   Ran all test suites.
   ```

## Relevant topic resources

* [Web map zoom levels](https://github.com/musa-611-fall-2022/course-info/blob/main/resources/webmap-tiles.md) (check out the link to Leaflet's docs in there)
* [The GeoJSON data format](https://github.com/musa-611-fall-2022/course-info/blob/main/resources/data-format-geojson.md) (specifically, read the **Introduction to Web Mapping** chapter)
* [JS Web Mapping Libraries](https://github.com/musa-611-fall-2022/course-info/blob/main/resources/webmap-libraries.md)

## Acknowledgements
* "_blurryperson1.jpg" from https://www.istockphoto.com/photo/blurry-silhouette-man-with-bokeh-sea-background-black-and-white-gm1073388114-287305122
* "_blurryperson2.jpg" from https://www.wallpaperflare.com/black-and-white-blur-blurred-blurry-one-person-adult-silhouette-wallpaper-hdavg
* "_blurryperson3." from https://www.wired.com/2016/07/paolo-cirio-obscurity/

