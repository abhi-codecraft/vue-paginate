Here's a comprehensive `README.md` file for your Vue pagination component. It includes installation, usage, and other essential information to help users integrate and use the component effectively.

---

# @abhicodecraft/vue-paginate

A customizable and responsive pagination component for Vue 3, designed to provide a seamless pagination experience. Easily integrate it into your Vue projects to manage large data sets with a clean and interactive pagination interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Setup](#basic-setup)
  - [Props](#props)
  - [Events](#events)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the package via npm. Use the following command:

```bash
npm install @abhicodecraft/vue-paginate
```

Or with Yarn:

```bash
yarn add @abhicodecraft/vue-paginate
```

## Usage

### Basic Setup

Import the component and use it within your Vue components. Below is a basic setup with example props to control pagination.

```vue
<script setup>
import Pagination from '@abhicodecraft/vue-paginate';
import { ref } from 'vue';

const totalItems = ref(100);       // Total items to paginate
const itemsPerPage = ref(10);      // Items per page
const currentPage = ref(1);        // Current active page

const handlePageChange = (page) => {
  currentPage.value = page;
  // Add logic to load data for the selected page
};
</script>

<template>
  <div>
    <!-- Other content -->

    <Pagination
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :current-page="currentPage"
      @page-changed="handlePageChange"
    />

    <!-- Other content -->
  </div>
</template>
```

### Props

| Prop         | Type    | Required | Default | Description                                       |
|--------------|---------|----------|---------|---------------------------------------------------|
| totalItems   | Number  | Yes      | -       | The total number of items to paginate.            |
| itemsPerPage | Number  | Yes      | -       | The number of items displayed per page.           |
| currentPage  | Number  | Yes      | 1       | The current active page.                          |
| visiblePages | Number  | No       | 5       | The maximum number of visible page numbers.       |

### Events

| Event        | Description                                      |
|--------------|--------------------------------------------------|
| page-changed | Emitted when the page is changed by the user.    |

Example of using the `page-changed` event:

```html
<Pagination
  :total-items="totalItems"
  :items-per-page="itemsPerPage"
  :current-page="currentPage"
  @page-changed="handlePageChange"
/>
```

### Customization

You can use CSS to style the pagination buttons as needed. The component uses the `pagination` and `page-item` classes, so you can customize it with CSS.

## Styling

Basic styling for the component is provided, but you may need to adjust it to suit your project. Here’s an example of CSS you could use to customize the component’s appearance:

```css
.pagination {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.page-item {
  margin: 0 5px;
}

.page-item.active .page-link {
  background-color: #007bff;
  color: white;
}

.page-item.disabled .page-link {
  opacity: 0.5;
  pointer-events: none;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or file an issue if you encounter any bugs or have feature requests.

To set up the project locally for development:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run `npm run dev` to start the development server.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

--- 

Feel free to replace `@abhicodecraft/vue-paginate` with your exact package name, and customize any other sections as you like. This should give users a clear guide on how to install, set up, and use your pagination component in their Vue projects.
