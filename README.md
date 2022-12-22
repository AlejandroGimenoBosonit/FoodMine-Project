# FoodMine Project

## Lessons

- Creating Angular App
    - New Angular Project Folder
    - Install Angular Client
    - Create App as frontend
- Create Header Component
    - Generate Component
    ```
    ng g c frontend/components/partials/header
    ```
    - Add HTML
    - Add CSS
- List Foods
    - Create Food Model
    - Create 'data.ts'
        - Add sample foods
    - Add images to the assets
    - Create Food Service
    - Create Home Component
        - Add TS
        - Add HTML
        - Add CSS
- Search
    - Add method to Food Service
    - Add search route
    - Show search result in Home component
    - Generate search component
        - Add to Home component
        - Add TS
        - Add HTML
        - Add CSS
- Tags Bar
    - Create Tag Model
    - Add Sample tags to data.ts
    - Food service
        - Add get all tags method
        - Add get foods by tag method
    - Add tags route
    - Show tag result in Home componen
    - Generate tags component
        - Add to home component
        - Add TS
        - Add HTML
        - Add CSS
- Food Page
    - Add method to food service
    - Generate food page component
        - Add Route
        - Add TS
        - Add HTML
        - Add CSS
- Cart Page
    - Create CartItem model
    - Create Cart model
    - Generate Cart Service
    - Add to Cart Button in Food Page
    - Generate Cart page component
        - Add Route
        - Add TS
        - Add HTML
        - Add CSS
- Not Found
    - Generate 'Not Found' page component
        - Add TS
        - Add HTML
        - Add CSS
    - Generate To Pages
        - Home Page
        - Food Page
        - Cart Page
- Connect to Backend
    - Create backend folder
    - npm init
    - npm install typescript
    - create tsocnfig.json
    - create gitignore
    - copy data.ts to backend.src
    - npm install express cors
    - create server.ts
        - Install @types
        - Add Apis
    - npm install nodemon ts-node --save-dev
    - Add urs.ts to frontend
    - Add HttpClient module
    - Update food service
- Login Page
    - Generate Component
        - Add to Routes
        - Add TS
        - Add HTML
            - Reactive Forms
        - Add CSS
    - Add Login API
        - Use JSON
        - Use Json web token
        - test unit postman
    - Generate user service
        - Generate user model
        - Add user subject
        - Add login method
            - Add user Urls
            - Generate IUserLogin interface
            - Add ngx-toastr
                - Import Module
                - Import BrowserAnimationsModule
                - Add styles in angular.json
            - Add to Header
        - Add local storage methods
        - add logout method
            - Add to header
