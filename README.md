# NestJS backend aplication

<p>Technologies used here:</p>
<ul>
  <li>NestJS</li>
  <li>Docker</li>
  <li>PostgreSQL</li>
  <li>Sequelize</li>
</ul>

## Endpoints

| Query type  | Endpoint | Action |
| ------------- | ------------- | ------------- |
| POST   | /notes  | Create a new note |
| DELETE   | /notes/:id  | Delete note |
| PATCH   | /notes/:id  | Update  note. Requires all fields in body to success |
| GET   | /notes/:id  | Get one note |
| GET   | /notes  | Get all notes |
| GET   | /notes/stats  | Get notes stats |

## Test API
<a href="https://www.postman.com/maintenance-cosmonaut-54646592/workspace/todos/request/28621909-5959b277-09f3-40b6-9648-176ba4c14afe">
Postman api with requests
</a>

```bash
# build app
 npm install
 npm run build

# build docker
  docker-compose build

# start docker
  docker-compose up
```
