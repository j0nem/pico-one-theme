Pico "One" Theme
==============

Pico theme for a one-page website. Currently **work-in-progress** and **not working yet**.

**Features:**

- Predefined Sections of the page, handled via meta YAML code
- Add a "custom" section to the page using markdown
- SEO-friendly (Microdata, Meta tags (e.g. OpenGraph), JSON-LD according to Google's standards)
- Supports a contact form via external [`p01-contact`](https://github.com/nliautaud/p01contact) plugin

How to use
----------

**Section types:**

- `header` - Logo image and anchor menu
- `go_back` - Link with link to the previous page
- `start` - Big background image with title
- `about` - Image gallery and text section
- `deals` - Current special deals, sale, etc
- `services` - Overview of products/services of a company
- `contact` - Contact data and map
- `footer` - Copyright and footer links, e.g. to another page
- `custom` - Add your own markdown content

The sections `start`, `about`, `deals`, `services`, `contact`, `header`, `footer`, `go_back` and `custom` are shown if the corrosponding parameter is set.

If you want to use `p01-contact` you may have to place a symlink from `assets/contact.css` to `plugins/PicoContact/style.css`, because Pico CMS restricts public access to the folder `plugins` by default.
`assets/contact.css` is automatically included by the template of this theme when using the contact form.

**Used Meta Params:**

General Params:

- `title` (str) The title of the site.
- `lang` - (str) Language of the website
- `robots` (str) The content of `<meta name="robots">`.
- `description` (str) The content of `<meta name="description">`.
- `image` (str) The content of `<meta property="og:image">`.
- `custom` (bool) Set to true if you want to show markdown content in extra section 
- `facebook` (str) Link to a facebook page which is included in the JSON-LD markup.

Section-specific Params:

- `header` (array):
    - `logo` (str) URL to the logo image file.

- `start` (array)
    - `title` (str) - Title shown in the start section
    - `subtitle` (str) - Subtitle shown in the start section

- `about` (array):
    - `title` (str) - The title of the about page
    - `big_img` (str) - URL to the main image file of the gallery
    - `more_img` (array) - Up to 3 more images
        - `image` (str) - URL to the main image
        - `thumb` (str) - URL to an square thumbnail of the image
        - `caption` (str) - Caption of the image (shown in full screen)
    - `text` (array of str) - Paragraphs of the about text

- `deals` (array):
    - `title` (str) - The title of the deals page
    - `deals` (array) - Array of deals:
        - `icon` (str) - URL to the icon of the deal
        - `recuced` (str) - Content for the "reduced by" label
        - `description` (str) - Short description of the deal

- `services` (array):
    - `title` (str) - The title of the services page
    - `categories` (array) - The services/products ordered by categories
        - `title` (str) - The title of the category
        - `icon` (str) - Path to the category icon
        - `items` (array of str) - Products/services of the category
    - `logos` (array) - Logos of cooperation/customer companies
        - `image` (str) - Name of the image file in `assets` (`<image>_sw.png` and `<image>_cl.png` are needed)
        - `name` (str) - Name of the company (`alt` attribute)
        - `link` (str) - Link that is placed on logo image

- `contact` (array):
    - `title` (str) - The title of the contact page.
    - `street` (str) - The street of the company.
    - `city` (str) - The city of the company.
    - `email` (str) - Email address of the company.
    - `use_form` (bln) - True if you want to include a contact form (requires manual installation of `p01-contact`!)
    - `maps_image` (str) - Name of the maps image file in `assets` (`<image>.png` is needed)
    - `maps_link` (str) - Link that the maps image should refer to
    - `opening_label` (str) - Label for the opening hours.
    - `opening` (array) - max. two definitions of opening hours
        - `sel1` (str) - first selector (e.g. mon-fri)
        - `val1` (str) - first value (e.g. 8am-8pm)
        - `sel2` (str) - second selector
        - `val2` (str) - second value
    - `phone1` (array) - Main phone number, also shown on start page!
        - `label` (str) - Label of main phone number
        - `number_show` (str) - Main phone number (how it should be displayed)
        - `number_real` (tel) - Main phone number (without spaces, international format)
    - `phone2` (str) - Second phone number
        - `label` (str) - Label of second phone number
        - `number_show` (str) - Second phone number (how it should be displayed)
        - `number_real` (tel) - Second phone number (without spaces, international format)
    - `fax` (str) - Fax number
        - `label` (str) - Label of fax number
        - `number_show` (str) - Fax number (how it should be displayed)
        - `number_real` (tel) - Fax number (without spaces, international format)

- `footer` (array):
    - `copyright_text` (str): Text after `&copy [YEAR]`, e.g. the name of the company
    - `links` (array) Internal page links to show up in the footer
        - `label` (str) Label of the link
        - `link` (str) Link, relative to base_url

- `go_back` (array):
    - `label` (str): Label for the "Go back" link

- `custom` (string): 
    - `embedded` (if the section is embedded in a page with other sections) 
    - or `single` (if the custom section is the only one on the page)
    - You can combine both params with `red` (red background) and `white` (white background) using a space (e.g. `embedded red`).

Notes:
------

The used icons are taken from [Flaticon](https://flaticon.com) and licenced under the [CC 3.0-BY Licence](https://creativecommons.org/licenses/by/3.0/).
The authors are [Zurb](http://www.zurb.com/), [Dave Gandy](http://fontawesome.io/), [Google](https://google.com), [SimpleIcon](http://www.simpleicon.com/) and [Chris Veigt](http://chrisveigt.com/).