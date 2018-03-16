Pico "One" Theme
==============

Pico theme for a one-page website. Currently **work-in-progress** and **not working yet**.

**Features:**

- Predefined Sections of the page, handled via meta YAML code
- Add a "custom" section to the page using markdown
- SEO-friendly (Microdata, Meta tags (e.g. OpenGraph), JSON-LD according to Google's standards)

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

The sections `start`, `about`, `deals`, `services`, `contact`, `header`, `footer`, `go_back` are shown if the corrosponding parameter is set. The custum content is shown if the parameter `custom` is set to `true`.

**Used Meta Params:**

General Params:

- `lang` - (str) Language of the website
- `uses` - (array) Defines which additional elements to show. Can include `go_back`,`custom`.
- `robots` (str) The content of `<meta name="robots">`.
- `title` (str) The title of the site.
- `description` (str) The content of `<meta name="description">`.
- `image` (str) The content of `<meta property="og:image">`. 

Section-specific Params:

- `header` (array):
    - `logo` (str) URL to the logo image file.

- `start` (array)
    - `img` (str) - URL to the background image file.
    - `title` (str) - Title shown in the start section
    - `subtitle` (str) - Subtitle shown in the start section

- `about` (array):
    - `title` (str) - The title of the about page
    - `big_img` (str) - URL to the main image file of the gallery
    - `more_img` (array of str) - URLs to (up to 3) more images
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

- `contact` (array):
    - `title` (str) - The title of the contact page.
    - `street` (str) - The street of the company.
    - `city` (str) - The city of the company.
    - `email` (str) - Email address of the company.
    - `opening_label` (str) - Label for the opening hours.
    - `opening` (array) - max. two definitions of opening hours
        - `sel1` (str) - first selector (e.g. mon-fri)
        - `val1` (str) - first value (e.g. 8am-8pm)
        - `sel2` (str) - second selector
        - `val2` (str) - second value
    - `phone1` (array) - Main phone number, also shown on start page!
        - `label` (str) - Label of main phone number
        - `number` (str) - Main phone number
    - `phone2` (str) - Second phone number
        - `label` (str) - Label of second phone number
        - `number` (str) - Main second number
    - `fax` (str) - Fax number
        - `label` (str) - Label of fax number
        - `number` (str) - Fax number

- `footer` (array):
    - `text` (str): General text (e.g. Copyright remark)
    - `links` (array) Internal page links to show up in the footer
        - `label` (str) Label of the link
        - `link` (str) Link, relative to base_url

- `go_back` (array):
    - `label` (str): Label for the "Go back" link

Internal notes:
-------------------

[Modernizr Build](https://codepen.io/anon/pen/WzQwej)