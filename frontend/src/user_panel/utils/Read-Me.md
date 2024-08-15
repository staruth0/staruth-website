# React Folder Structure

This is a suggested folder structure for a React project.

- assets
  - images
  - videos
  - documents
  - svg
- utils
  - formatDate.js
  - capitalizeString.js
- commons
  - Button.js
  - Card.js
  - Modal.js
  - FormInput.js
  - Spinner.js
- layout
  - navbar
  - footer
  - rootlayout
- pages
  - home
    - components
      - Banner.js
      - FeaturedProducts.js
      - ...
    - index.js
- models
  - user.js
  - product.js

## Folder Descriptions

- *assets:* This folder stores any static assets such as images, fonts, or other media files used in your project.

- *utils:* This folder contains utility functions that can be used across different parts of your application. Examples include formatDate.js for formatting dates and capitalizeString.js for capitalizing strings.

- *commons:* The commons folder holds reusable and commonly used components that can be shared across multiple pages or components. Examples include Button.js, Card.js, Modal.js, FormInput.js, and Spinner.js.

- *layout:* The layout folder contains components related to the overall layout of your application, such as the navigation bar, footer, and root layout components. It helps to keep layout-specific code separate from other components.

- *pages:* The pages folder represents the different pages or views of your application. For example, the home folder represents the home page, and it may contain its own components in the components subfolder. The index.js file in each page folder serves as the entry point for that particular page.

- *models:* The models folder contains data models or classes that define the structure and behavior of your application's data. Examples include user.js and product.js, which might define the properties and methods for managing user and product data respectively.
