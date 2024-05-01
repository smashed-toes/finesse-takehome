# Finesse Takehome

### Running Instructions:

To run this code locally, complete the following steps:

1. Clone the repo
2. Input your IP Address into the following locations to allow for simultaneous testing on laptop and on mobile.
   - The [server address constant](https://github.com/smashed-toes/finesse-takehome/blob/8a999c3b546ef4c7228a4fb1e05168d35cd859a5/frontend/src/utils/constants.tsx#L2) in the frontend.
   - The [allowed hosts array](https://github.com/smashed-toes/finesse-takehome/blob/8a999c3b546ef4c7228a4fb1e05168d35cd859a5/backend/finesse/finesse/settings.py#L30) in the django settings.
   - The [CORS allowed origins array](https://github.com/smashed-toes/finesse-takehome/blob/8a999c3b546ef4c7228a4fb1e05168d35cd859a5/backend/finesse/finesse/settings.py#L64), also in the django settings.
3. Navigate to `backend/finesse` in your terminal. Run the server by running `python3 manage.py runserver <your-ip-address>:8000`. Including your ip address will allow you to access the program on your phone connected to the same wifi address.
4. In a separate window of your terminal, navigate to `frontend`. Install dependencies using `npm install` and run it with `npm run start`.
5. Access a product page by navigating to `http://<your-ip-address>:3000/products/3`. You will find other valid product pages at `products/4` and `products/5` as well.

### Goal:

Demonstrate my approach to engineering a system
from scratch, accounting for scalability, modularity, and success. We would like to see
both your eye for aesthetics, UI and UX as well as logical backend & systems understanding.

### Deliverables:

- Implement the product page for mobile
- Identify 1 issue with the current live website
- Identify 3 performance issues, describe a fix

### Project Overview:

To meet the goals and deliverables of the takehome, I made various development decisions as a way to showcase both my ability to replicate provided designs with detail, and my inclination to develop in a product-minded manner that prioritizes the end user experience.

- Building a system from scratch:

  For the purposes of this project, I mostly stuck with the technology I was familiar with that offered itself to a speedy and effective initial development process.

  - Backend - Django: I chose django to be able to quickly build models for the product data, and to have a system that automatically and easily managed any necessary changes to the database and models. Additionally, the django admin interface makes it very easy to upload data.
  - Database - SQLlite: The default database with django, Given that the scope of the project was relatively small, using a relational databse was an easy decision. The only necessary data was product details as well as images connected to the products.
  - Frontend - React w/ TypeScript: I chose to use React to leverage it's dynamic rendering capabilities, and used TypeScript to be able to strictly type. I enjoy having Typesafety during the development process to avoid making errors throughout, speeding up the process. Additionally, I get the added benefit of using GraphQL for my API
  - API - GraphQL/Apollo/Codegen: GraphQL is excellent for swiftly building custom queries that only retrieve the desired information for each use case, minimizing load on the server and creating data objects that are easy to use on the client side. Apollo easily provides GraphQL access in react, and Codegen makes it easy to build relevant graqphql documents and checks for errors.
  - Styling/CSS - Tailwind + more: I love developing with tailwind as a way to quickly and clearly style most of my components. It's clear language makes it easy to read and use, and having the styling inline for each component makes it easy to change. Additionally, I used some components from the Ant Design library and made use of Styled Components for the products image carousel.

- Scalability, Modularity, and Success:

  Although the scope of this project was generally small relative to the entire Finesse website, I developed in such a way that would allow me or another developer to quickly add on to and make use of my work.

  In the backend I accomplished this by:

  - Building a Django server that allows for the modular addition of new apps/models, and has a well defined migration pattern that allows for easy simultaneous development.
  - By designing my product model that wouldn't require mass changes were the requirements to be changed. Specifically, I separated out my product and image models, mapping images to products by the product id to accomodate for scenarios where there were an unknown number of images associated with a given product.

  In the frontend:

  - Created a project hierarchy that clearly designates where relevant components live. All components used for Product purposes live in that folder, while additional components not directly associated with the product page live in the higher level components folder.
  - Separated out individual components and logic to allow easy re-use if needed down the line (for exmaple, adding the quantity selector button into the cart page)
  - Setting up codegen to allow for easily adding new GraphQL queries, fragments, or mutations.
  - Setting up the react router to allow for dynamically rendering pages from the url even though the project only necessitated developing for a single page.

  ### Fixing 1 Issue - Quantity Selector

  One issue I identified on the Finesse page was with the product quantity selector. It allowed for the user to enter a negative number, 0, or to be left blank. Whenever that happened, it still allowed the user to interact with the "Add to Cart" button, and it would default add one. Ideally, no number less than 0 should be able to input, and the quantity should never be blank.

  To remedy this, I used a number input field from Ant Design, set the minimum of the field to 1, and built a quantity change handler (`handleInputChange`) that would only set a new quantity if the value fit the proper criteria. That way, the quantity is never displayed as being lower than 1, and always matches the value of the quanitity saved in the state.

  ### Additional Issues

  For this section, I know it said not to worry about fixing these issues, but I decide to make some light changes to remedy some of them.

  1. **Image Carousel**: I enjoy a smooth carousel experience, and I tend not to like the look of larger buttons. However, I felt that there were some accesibility issues with the product carousel here, specificially for mobile. Although the majority of the Gen-Z target audience will have spent enough time on websites to recongnize a carousel without left and right nav buttons or a dot pagination display, the existing design is not particularly intuitive for all users. For that reason, I decided to add dot pagination and navigation buttons to the carousel. This helps to improve accesibility from a visual perspective.

     Additionally, with the carousel, I chose to use the Swiper library to quickly be able to develop a working and effective carousel.

  2. **Sticky Header**: Whenever I'm on a website, I always want to have easy access back to the home page or to search functionality. I felt like needing to scroll back up to have to access the header slowed down the experience of the website. I made the slight change to have the header stick to the top of the page by using the `sticky` and `top-0` tailwind properities.

  3. **Horizontal Viewing**: When flipping my phone, I noticed a couple of issues with the product page. The header - when displayed - was massive, covering almost half the height of the screen. Additionally, info about sizing and shipping had a stretched quality. While developing, I ensured that the necessary components were still visible even when being horizontally viewed. I also slightly re-designed the tables, maintaining some of their initial design style but cleaning them up and reducing the amount of unnecesary spacing in each info component.

  4. **Size Selection**: When selecting sizes, there were times that two sizes would be highlighted if I dragged my finger over the sizes. I remedied this by ensuring that my size component would only be styled as selected if the state reflected the same size selection.

  ### Additional Design Decisions and Further Development

- **Font Selection**: For the purposes of this project, I did not download/pay for the adobe fonts that the finesse website actually uses. I decided to use simple fonts that shared some similar properties, but configured my tailwind in such a way that would allow changing the primary and secondary font styles easily without having to go through the app and change each text element.

- **Suggested Products Carousel**: Although not fully styled and integrated, I setup the basis for the suggested items carousel with routing to other product pages. This allowed me to demonstrate the benefits of my scalable usage of react-router, the effectiveness of my django backend, and exhibit usage of multiple types of GraphQL queries. If I were to build an actual suggestion algorithm, I would build out a table for tags in the backend, and create a query that retrieves a set number of products that have the most shared tags, ordered by highest number of shared tags.

- **Complete The Set**: I noticed on the website that certain products that were part of a set had an additional "Complete the Set" section similar to the "You May Like" suggested products carousel. To develop this, I would create a set model so that each product could be mapped to an associated parent "set". These products could then be retrieved through a GraphQL.

- **Contrast for Finesse Info**: For the section of the product page detailing size inclusivity and 24/7 customer service, I noticed that the contrast between the text color and the background color was very low, making it less accesible to some visually impaired users. To remedy that, I made the text black.

- **Footer**: I was unexpectedly pressed for time yesterday when I had planned to work on the Footer, so I didn't fully complete it. Given that it's one of the simpler components, I wanted to prioritize some more interesting components of the application. To finish it, I would import icons for the relevant social media platforms and credit card companies and format them using tailwind to complete my existing `Footer` component.

### Conclusion

Ulimately, I believe that through this project I've demonstrated my ability to develop effective technology swiftly. I've taken into consideration elements of scalability and modularity, and I've actively worked to balancing attention to tech spec details with critical thought around user experience.

When collaborating with others, I'd always look to engage in a conversation about design changes to technical elements and would never make an executive decision to make a change. Working independently here I've gone ahead and implemented some of my ideas so you could see them in action.

I really enjoyed this takehome and I'm looking forward to hearing your thoughts!
