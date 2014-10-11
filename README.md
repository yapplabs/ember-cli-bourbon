# ember-cli-bourbon

Include boubon in an ember-cli app.

When the addon is installed, it will add bourbon 3.2.1 as
a bower dependency. (The newer bourbon 4.0.x is not compatible with node-sass at the time of
this writing).

The addon will make bourbon available in the app/styles tree during build, so you just need
to add the following to your `app.scss`:

    @import "bourbon";

## Dependencies

Your project should already be set up to handle sass/scss builds. If you're not, do so by running:

    npm install broccoli-sass --save-dev

## Usage

In your ember-cli (>= 0.1.1) project, run:

    npm install ember-cli-bourbon --save-dev
    ember g ember-cli-bourbon
    bower install

## Developing this Addon

* `ember server`
* Visit the dummy app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
