## Важно!

! Приложение предполагает установленный и настроенный postgresql

! Нужно поменять username, password и database в config/config.json

! Для проверки работы использовать Postman/Insomnia или другие аналоги

## Запуск проекта

npm i
npm run dev

## Работа с бд

# создать бд с именем, указанным в config/config.json

sequelize db:create

# применить миграции

sequelize db:migrate

# отменить миграции

sequelize db:migrate:undo:all

# заполнить бд данными

sequelize db:seed:all
