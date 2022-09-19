## Refinn's interview fontend assignment 

In order to run this project required:

* `Backend project` is running  https://github.com/bytesbanana/refinn_assignment_backend
* `Docker`
* `Mapbox` access token

For more infomation about `Mapbox`
https://www.mapbox.com/
## Step to run
1. Input `Mapbox` access token to `NEXT_PUBLIC_MAP_BOX_KEY` in file`.env.example`  (**IMPORTANT**)
2. Run docker compose command below (this step will take several minute to complete)
```
docker compose -f docker-compose.yml up          
```
3. Go to http://localhost:3000
