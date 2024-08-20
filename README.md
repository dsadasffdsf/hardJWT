# server
npm i 
npm run dev
# client
npm install --force
npm run dev


как бд используется mongodb

в файле .env нужно будет изменить 
( DB_URL = mongodb://localhost:27017/hard-jwt ) = ( DB_URL = mongodb://localhost:{подключение к mongodb} )

MailService не был до конца настроен , так что его можно отрубить ,если будет мешать работе

В дальнейшем проведу докерезацию , ну или перевести на онлайн подключение к mongoDb
