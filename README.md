# IdeaBox-BE


## install/setup MySQL
  1)Install MySQL `brew install mysql`
  2)Start SQL server `mysql.server start`
  3)Run MySQL `mysql -u root`
  4)Populate initial database `source schema.sql`

## install node modules
  1) Install node modules `npm i`
  2) run backend `npm run dev`

## Get initial DB data
  1) open Postman, ThunderClient for VS Code, or some other api call handler
  2) make GET request to `http://localhost:8080/notes`
  3) you should get a 200 status with data
  ```[
  {
    "id": 1,
    "title": "dummy title 1",
    "content": "dummy description 1",
    "created": "2023-05-12T15:33:11.000Z"
  },
  {
    "id": 2,
    "title": "dummy title 2",
    "content": "dummy content 2",
    "created": "2023-05-12T15:33:11.000Z"
  }
]```
