# CodeBase
This is the basic setup of the CodeBase. 
Basic Setup Done.

# Assignment 01
# Q. What is Emmet?
 Emmet is the plug in for many popular text editor which greatly improves the HTML & CSS workflow.
 You can use short expression to generate HTML Markup & CSS 
 Emmet uses different abbreviations and short expressions depending on what's passed, and then dynamically converts the abbreviations into the full code

# Q. Difference between a Library and Framework?
https://kruschecompany.com/framework-vs-library/#:~:text=The%20framework%20provides%20the%20flow,the%20code%20from%20the%20library.

# Q. What is CDN? Why do we use it?
A content delivery network (CDN) is a group of servers spread out over a region or around the world that work together to speed up content delivery on the web.

better performance, increased reliability, cost savings, and resilience against cyber attacks.

# Q. Why is React known as React?
React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.

https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html#fbolt-is-born

# Q. What is crossorigin in script tag?
The crossorigin attribute, valid on the <audio>, <img>, <link>, <script>, and <video> elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. Depending on the element, the attribute can be a CORS settings attribute. 

# Q. What is diference between React and ReactDOM
React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

# Q. What is difference between react.development.js and react.production.js files via CDN?
The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.

The production build, on the other hand, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no hot reloading included. Source Maps might be included as separate files depending on your webpack devtool settings.

What specifically separates production from development is dependent on your preferences and requirements, which means it pretty much depends on what you write in your Webpack configuration.

The webpack-production documentation is very straight-forward. Also, the article Webpack 3 + React — Production build tips describes the process of creating production builds for React with Webpack pretty good.

# Q. What is async and defer?
Both async and defer have one common thing: downloading of such scripts doesn’t block page rendering. So the user can read page content and get acquainted with the page immediately

In practice, defer is used for scripts that need the whole DOM and/or their relative execution order is important.

And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.

