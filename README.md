
# Open Git Bash Terminal In Vs code

```sh
git clone https://github.com/Rohith-Patel13/job-seekers-server.git
```

```sh
npm install
```

# Create .env file by using Git Bash Terminal
```sh
touch .env
```

# Add below code in .env file
```sh
MONGODB_URI = mongodb+srv://<user_name>:<password>@cluster0.vbr0tsa.mongodb.net/<Database_Name>

MONGODB_URI_TEST = mongodb+srv://<user_name>:<password>@cluster0.vbr0tsa.mongodb.net/<Database_Name_Test>

```


# Check scripts object in package.json file
```sh
  "scripts": {
    "dev": "node app.js",
    "test": "jest"
  }
```


# In development
```sh
npm run dev
```

# For testing
```sh
npm test
```
