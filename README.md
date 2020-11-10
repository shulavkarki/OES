# OES
## Backend Setup

### Clone the Repository

```
git clone https://github.com/shulavkarki/OES.git
```

### Create Virtual Env

```
cd Backend
py -m venv <env_name>
```

### Activate environment
```
<env_name>\Scripts\activate
```

### Install Dependencies

```

pip install -r requirements.txt
```

### Make Migrations

```
python manage.py makemigrations
python manage.py migrate
```

### Run
```
python manage.py runserver
```



## Frontend Setup

### Change Directory
```
cd frontend
```
### Install Dependiencies
 ```npm install```
 
### Run
 ```npm start```

Runs the app in the development mode.<br />

> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

