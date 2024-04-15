This comprehensive guide empowers you to understand, customize, and utilize the e-commerce admin template built with ReactJS and Tailwind CSS.

 - **Built with ReactJS and Tailwind CSS:**
	This template leverages the power of ReactJS for building dynamic user interfaces and Tailwind CSS for achieving clean and maintainable styles.
 - **Focus on Simplicity:**
	 The core design principle prioritizes ease of use and a streamlined development experience.
- **Production-Ready Templates:**
	The template structure facilitates the creation of production-ready components that can be easily integrated into your e-commerce application by simply copying the necessary files and linking your API.

### Setting up project

 1. **Navigate to Project Directory:**
	  Open your terminal and navigate to the directory where your project is located.
2. **Install Dependencies:**
	Run the following command in your terminal to install all required dependencies.
    ```
    npm install
    ```

3. **Start Development Server:**
	Launch the development server to view and interact with the template.
    ```
    npm start
    ```

4. **Clean Up Directories (Data & Documentation):**
	The data and documentation directories might contain sample data and introductory documents. Make sure to remove them.

5. **Build for production:**
	When you done building your admin panel and ready to deploy, run following command to build for production.
    ```
    npm build
    ```


### Project Structure

```
    ├── public
    ├── src
    │   ├── components
    │   │   ├── common
    │   │   ├── inputs
    │   │   ├── layout
    │   │   ├── orders
    │   │   ├── products
    │   │   ├── promotions
    │   │   ├── settings
    │   │   ├── users
    │   ├── data
    │   ├── documentation
    │   ├── hooks
    │   ├── pages
    │   ├── routess
    │   ├── styles
    │   ├── utils
    ├── README.md
    ├── package-lock.json
    ├── package.json
    └── tailwind.config.js
```

### Directory Descriptions:

 - **components/**: Houses all reusable UI components used throughout the admin panel. 
	 - **inputs/**: Contains components specifically designed for user input
   (e.g., text fields, dropdowns).
   - **layout/**: Includes components that define the overall layout structure of the admin panel (e.g., header, navigation, content area).
   - other directories can contain additional subdirectories for components grouped by functionality (e.g., product cards, order details).
 -  **hooks/**: Stores custom React hooks for managing application state and logic.
 - **pages/**: Houses individual admin page components representing different functionalities (e.g., product listings, order management).
 - **routes/**: Contains configuration files defining the routing logic for navigating between different pages in the admin panel.
 - **styles/**: Styles files.
 - **utils/**: Provides utility functions for common tasks across the application.

### Tailwind CSS Configuration
-   **Minimal Configuration:** The template maintains a default Tailwind CSS configuration to minimize out-of-the-box setup for users. This allows for easy customization without extensive changes.
    

-   **Custom Colors:** Two pre-defined color classes, `primary` and `secondary`, are provided as a starting point for your application's color scheme. You can easily modify these classes in the Tailwind configuration file (`tailwind.config.js`) to match your brand identity.

```
module.exports  =  {
	//...
	theme:  {
		colors:  ({colors})  => ({
			...colors,
			'primary':  colors.indigo,
			'secondary':  colors.fuchsia,
		}),
	},
	//...
}
```

For detailed information on customizing Tailwind CSS themes, refer to the official documentation: [https://tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors).

### Adding Routes

The `routes` directory stores files responsible for defining application routes.
The template utilizes the `Route` component to enable the creation of new routes with flexibility. This component allows you to specify various properties for each route, including:

```
export  default  function  Route  (porps)  {
	const  options  =  {
		path:  '/',
		component:  null,
		name:  '',
		private:  false,
		icon:  null,
		hidden:  false,
	}

	return  {...options,  ...porps};
}
```

- **path** : Required. Defines the URL path that triggers the route.
- **component**: Specifies the React component to be rendered for this route.
- **name**: (Optional) Assigns a name to the route for easier reference in navigation and search functionalities.
- **icon**: (Optional) Sets the icon to be displayed for the route in the sidebar navigation.
- **hidden**: (Optional) Controls whether the route is hidden from the sidebar navigation (defaults to false).

To add a new route, define your new route in 	`routes/index.js` file.

``` 
new  Route({
	path:  "/products",
	element:  <Products  />,
	display_name:  'Products',
	icon:  ArchiveBoxIcon,
}),
```
### Email templates

There is one email template located in the `documentation > teampltes > emails` directory. This template is built using `maizzle` which uses TailwindCSS to build email templates. Refer their documation for more information  at [https://maizzle.com](https://maizzle.com).

### Dependencies

- HeadlessUI `@headlessui/react` [https://headlessui.com](https://headlessui.com)
- HeroIcons `@heroicons/react` [https://heroicons.com](https://heroicons.com)
- TanStack Table `@tanstack/react-table` [https://tanstack.com/table/latest/docs/introduction](https://tanstack.com/table/latest/docs/introduction)
- FuseJS `fuse.js` [https://www.fusejs.io](https://www.fusejs.io)
- MomentJS `moment` [https://momentjs.com](https://momentjs.com)
- React Datepicker `react-datepicker` [https://reactdatepicker.com](https://reactdatepicker.com)
- React imask `react-imask` [https://www.npmjs.com/package/react-imask](https://www.npmjs.com/package/react-imask)
- React Select `react-select` [https://react-select.com](https://react-select.com)
- React TagsInput `react-tagsinput` [https://www.npmjs.com/package/react-tagsinput](https://www.npmjs.com/package/react-tagsinput)
- React ChartJS `react-chartjs-2` [https://react-chartjs-2.js.org](https://react-chartjs-2.js.org) 
