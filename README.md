Welcome to book-exchange-platform application 


Stack

### React
React is used because of the SPA nature of this type of application that helps to easily convert and switch between mobile and web. The components are made to be reusable and modular to ensure that it is able to be iterated over by future open source developers. Also, React has the capabilities of server side rending, allowing developers to utilize the Vitual DOM without needing to update the view every time. 

### PostgreSQL
The use of PostgreSQL was chosen to efficiently combine our highly relational data with the combination of users that we required for the application. The relational nature of a SQL database allowed an overarching top down view of the data we were moving from the backend to the frontend, and allowed concise data movement as we were developing the application. 

### Bcrypt
Bcrypt was an ideal choice to encrypt the passwords for our users, as we felt its unique salt hashing system would add increased security, and also an easy framework for hashing passwords exponentially more if warranted. 

### Node / Express
Node and Express was chosen to keep “language consistency" between front and back end. It is a cross-platform runtime environment built on V8, high-performance open-source JavaScript engine, ensures excellent performance in an event-driven, non-blocking I/O paradigm.




## Install dependencies
```bash
npm install
```

### Run in development
```bash
npm run dev
```

### Start an instance
```bash
npm start
