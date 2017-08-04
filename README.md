## Features
- Add a task

![](add.gif)

- Delete a task

![](delete.gif)

- Done a task

![](done.gif)

- Edit a task

![](edit.gif)

- Sort tasks

![](sort.gif)

## Steps to Runserver
### Configure Database
- Install PostgreSQL, [https://www.postgresql.org/](https://www.postgresql.org/)
  - Don't forget to set `pg_hba.conf`.
- Edit settings.py
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME':'postgres', ## name of your database
        'USER': 'postgres', ## user of your database
        'PASSWORD': 'postgres', ## your password
        'HOST': '',
        'PORT': '5432',
    }
}
```

### Install Modules and Dependencies
- `cd backend`
- `sudo pip install -r requirements.txt`
- `sudo python manage.py makemigrations`
- `sudo python manage.py migrate`
- `sudo python manage.py runserver`
- Open the other Terminal
- `cd frontend`
- `sudo npm install`
- `sudo webpack`
- `sudo npm run start`

## Others
- Note:[https://today2tmr.com/en/2017/08/04/notes-for-todo-list-project-with-django-and-react/](https://today2tmr.com/en/2017/08/04/notes-for-todo-list-project-with-django-and-react/)
