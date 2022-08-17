# UNSPLAGRAM

<p align="center">
<img src="https://media.giphy.com/media/lyA06NQPPiEsmjXLkT/giphy.gif" width="80%"></p>

SPA for viewing photos.

This is a single-page application with an endless feed (Masonry) for viewing photos, scrolling down the page loads new photos. The unsplash API is used, the authorization functionality is implemented, the navigation between pages for detailed viewing of a photo, setting and removing likes under a photo. Written in JavaScript with React-Redux and built with Webpack

To run the application, you need to build it using webpack and other libraries, for this, follow these steps
1. Install packages <code>npm install</code>;
2. After installing the packages, run the <code>"npm start"</code> command, automatically start the server on your computer and the app should automatically launch in your browser if it not happened run the "index.html" file in "build" directory.

You can also view the source non-minified code by running "npm run dev" or "npm run build" for finished version.

If you want to host an application on your server so that it is available to everyone on the Internet, you need to register on the unsplash website and perform all operations to obtain a secret key, access key and also specify the redirect page (url of your domain) where unsplash will forward after authorization. After that, in the ".env" file, enter your data that you received from unsplash (REDIRECT_URI, SECRET_KEY, ACCESS_KEY) into the corresponding constants.
