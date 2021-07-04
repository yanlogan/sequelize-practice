## Важно!

! Приложение предполагает установленный и настроенный postgresql

! Нужно поменять username, password и database в config/config.json

! Для проверки работы использовать Postman/Insomnia или другие аналоги

## Запуск проекта

```console
npm i
npm run dev
```

## Работа с бд

# создать бд с именем, указанным в config/config.json

```console
sequelize db:create
```

# применить миграции

```console
sequelize db:migrate
```

# отменить миграции

```console
sequelize db:migrate:undo:all
```

# заполнить бд данными

```console
sequelize db:seed:all
```
