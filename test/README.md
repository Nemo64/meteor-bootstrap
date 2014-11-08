It is hard to test if this package works becuase of the many configuration possibilities.
Here I at least try if all modules are working.
Just jun `meteor` in the full-include folter and visit the site. If all is working than you're good to go.

You can generate the test html from the official bootstrap documentation with
```JavaScript
var $sections = $('.bs-docs-section');
$sections.children('p, .bs-callout, .highlight, .zero-clipboard').remove();
$sections.find('.bs-example').each(function () {
    $(this).children().insertAfter(this);
}).remove();
```

After that just copy the main column into the test html