# Package-Name Extension

### Find, Show, And copy the package name from play store.

With this extension, you can get details about app in [play.google.com](https://play.google.com).

## how to install
You can download and install the extension from [chrome web store](https://chrome.google.com/webstore/category/extensions):
- visit to extension page [here](https://chrome.google.com/webstore/detail/package-name/loonbpfmhdhmhkijdjomaiicbfgchgck). 
- press the `install` button. 
- that all! 

<details>
<summary> from source </summary>

<r>

- download the lastes version from [Github releases](https://github.com/YeudaBy/PackageNameExtension/releases) 
- Extract the file. 
> enable developers mode on your browser:
- on your browser, visit to `chrome://extensions`. 
- enable `developer mode`. 
- choose `load unpackage`. 
- select the folder that you extracted the extension into. 

**Now you have the extension installed on your browser!** 

</details>

## How to use
If you are using the extension often, I recommending to pin it to the toolbar, by right-click on the icon.
#### GO-TO
You can open the pop-up window anywhere, and enter a package name. By submitting, you'll visit to Google play, and open the app page. If you already have an existing tab on play store, it will change to your app page.

The app page url based on:
`https://play.google.com/store/apps/details?id=` + `package.name`.

#### Package-Name

While you're on app page (NOTE: app page means play store's page, of application. not play store home page or other pages on play store), you can open the pop-up window of our extension, and the package name will show up. You can copy him to your clipboard by click on the button up there.

Also, by pressing on `more info` btn, you'll get other information about the app, based on the info provided by Google play.

The info you'll get there, is included:
+ the title of the app
+ the Author name of the application
+ the email address of the author
+ the description

Note that there are developers that provide google play a custom title and description, based on the language which your browser is setting up.

Right now, the description is auto-copied to your clipboard.

If the description includes some Emojis, They'll be replaced to `*`.

In case you will see `undefined` in the fields, just press <kbd>F5</kbd>. 

### TODO
- [ ] Add copy button to all the fields
- [ ] Fix refreshing 
