docker build -t node-lts .

cd ..

docker-compose up --build --no-recreate -d

npm run start