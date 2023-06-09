# 1. What is npm?
NPM is used to manage packages that we install in our system.
It is a standard repository for packages.
NPM can manage dependencies.
npm is installed with Node.js. This means that you have to install
Node.js to get npm installed on your computer.
If you want to include any of the packages in your project then you can
use npm
Basic syntax - npm install package_name     or      npm i package_name

# 2. What is Parcel/Webpack? Why do we need it?
Parcel and webpack are the bundlers which is the development tool that 
combines many javascript code files into a single one that is production 
ready loadable in the browser.
Here production ready means an app that is minified, optimized with clean
console and bundled.
It generates a dependency graph as it traverses your first code files.

# 3. What is .parcel-cache?
The .parcel-cache folder stores information about your project when parcel
builds it, so that when it rebuilds, it doesn't have to re-parse and 
re-analyze everything from scratch.
It's a key reason why parcel can be so fast in development mode.

# 4. What is npx?
The npx stands for Node Package Execute and it comes with the npm.
When you installed npm above 5.2.0 version then automatically npx will installed.
It is an npm package runner that can execute any package that you want from the
npm registry without even installing that package.
When you run a package using NPX, it searches for the package in the local and global registry, and then it runs the package. If the package is not already installed, NPX downloads the package files and installs the package, but it will only cache the files instead of saving it.
npx is a tool for executing node packages.

# 5. What is the difference between dependencies and devDependencies?
In package.json file there is a package called devDependencies and it consists of
all the packages that are used in project in it's development phase and not in the
production or testing environment with it's version number.
You can add devDependencies to the package.json by using - npm install -D package_name
While dependency is an object that contains the library, which your project requires
for production and environments and functioning effectively.
You can add dependencies to the package.json by using - npm install package_name

# 6. What is tree shaking?
Removal of unused code from app is called Tree Shaking.
Helps in increasing performance.

# 7. What is Hot Module Replacement?
When you make a change, Parcel automatically updates your code in the browser – 
no page reload necessary!

# 8. List down any 5 superpowers of parcel and describe any 3 of them in your own words.
Diagnostics, Hot Module Replacement, Minification, Image optimization, Reliable caching
*Diagnostics - If you make an error in your code or configuration, Parcel displays beautiful
diagnostics in your terminal and in the browser.
*Minification - Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box!
Just run parcel build index.html, and your whole application will be built and optimized 
automatically.
*Reliable caching - Everything Parcel does is cached – transformation, dependency resolution,
bundling, optimizing, and everything in between. This means the dev server restarts instantly,
and the same code is never built twice.

# 9. What is .gitignore? What should we add and not add into it?
The .gitignore file is a text file that instructs Git to ignore certain files or folders in 
a project.
It's usually used to avoid committing transient files from your working directory that aren't
useful to other collaborators, such as compilation products, temporary files IDEs create, etc.

#  10. What is the difference between package.json and package-lock.json?
package.json-
It is a configuration for npm. npm will take care of the versions of packages being installed
in your project. The main purpose of this file is to hold various metadata related to project.
It keeps the track of approximate versions.
package-lock.json-
It is automatically generated for any operations where npm modifies either node_modules
or package.json. It describes the exact tree generated. It keeps the track of exact versions.

#  11. Why should I not modify package-lock.json?
We should not change package-lock.json directly. That’s being handled automatically by NPM.
It reflects changes made to package.json to package-lock.json and keeps it up to date.

# 12. What is node_modules ? Is it a good idea to push that on git?
When you first install a package to a Node. js project, npm automatically creates the node_modules
folder to store the modules needed for your project and the package-lock.
It is not a good idea to push to git as the file is large.

# 13. What is the dist folder?
Folder to generate builds. Dist keeps files minified for us.
npx parcel build index.html

# 14. What is browserslist?
Browserslist is a tool that allows specifying which browsers should be supported in your frontend
app by specifying “queries” in a config file.
