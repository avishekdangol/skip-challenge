## Choose your skip size page

Usually I use UI components libraries, such as Bootstrap, Material UI, Ant Design and Shadcn. However, for this task, I chose to build quick and simple components using Tailwind CSS. 

I used an animated skeleton loader to be displayed while fetching skip details. Instead of building it from scratch, I adapted an existing component from online resources. When the page loads, the skip products are retrieved using a custom hook and displayed dynamically in the page. Since this is a standalone page, I excluded the stepper from the original design, as it wasn't necessary in this context (I would have adapted existing stepper component from online resources if I had to). 

Each skip card presents an image, size, price (including transport cost, if applicable) and hire period. Users can sort the skip products in ascending or descending order based on price or size and can also select cards using keyboard navigation. To improve usability, I added small warning icons with hover animations that display descriptions for warnings such as not allowed on road or not allowed for heavy waste. I used danger icon for the forbidden flag.

To highlight selection, I applied a border, slightly lowered opacity, and added a subtle shadow to the chosen skip card. At the bottom, I designed a simple yet visually appealing fixed footer, which mirrors the original page's structure but offers an improved look. The footer displays details of the selected skip, provides additional information, and includes buttons for navigation (forward and backward).

The entire page is fully responsive across desktop and mobile devices.