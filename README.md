# ember-cli-bourbon

Include bourbon in an ember-cli app.

## Dependencies

Your project should already be set up to handle sass/scss builds. If you're not, do so by running:

    ember install ember-cli-sass

## Usage

In your ember-cli (>= 0.1.1) project, run:

    ember install ember-cli-bourbon

The generator will create an `app.scss` with the sole contents being:

    @import "bourbon";

If you already have content in your `app.scss`, you can add that line to the top of `app.scss` yourself.

## Choosing your version of bourbon

If you install a version of bourbon greater than 5.0.0 in your application this addon
will detect and use that version instead of the default one. This is useful if you
want access to the newest bourbon features and this addon is not updated right away:

    npm install bourbon@5.1.0
