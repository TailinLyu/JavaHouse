# Java House

## Iteration One

### BackEnd

- Choose a preferred language(Express, JS)
- CRUD Operations
- Create a database and able to manipulate it with CRUD(MySQL)
- Offer checkpoints to FrontEnd

#### CheckPoint
- GET /drinks
- GET /drinks-detail
- GET /drinks-detail/<id>
- POST /drinks
- PATCH /drinks/<id>
- DELETE /drinks/<id>

#### Design Database
- Menu: DrinkId, DrinkName, recipe
  "Coffee, Milk" "Coffee" "Sugar, Pompkin, Milk, Coffee"
- Menu: drinkId, drinkName
  drink: drinkId, drinkName, recipeId, price, availability
  Ingredient: id, name


### FrontEnd

- Build Skeleton with Create-React-App
- Design simple workflow
- Offer corresponding user interactions as the BackEnd offered

## Iteration Two

### BackEnd

- Unit && Integrated Tests

### FrontEnd

- Use Redux/Mobx to manage states
- Prettify the Page

### Other

- Achieve Role-based Access Control
- Setup Continuous Integration Pipeline with AWS

## Iteration Three

- Move databases to cloud/Convert SQL Database to NoSQL(AWS Aurora)
- Deploy
- Continuous Deployment

## Others

- [ ] Allow Users to buy drinks
