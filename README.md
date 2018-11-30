# Демо проект React

## Цель проекта

Основная цель данного проекта показать основные типы компонентов, необоходимые для выполнения тестового задания.
Компоненты разбиты по следующему принципу:

- Stateless компоненты без внутреннего состояния
- Statefull компоненты с внутренним состоянием:
  - Компонент использующий внутри себя React State [ссылка](https://github.com/Altairko/im-internship/blob/master/src/containers/Stateless/Stateless.jsx)
  - Компонент использующий Redux Store и React State [ссылка](https://github.com/Altairko/im-internship/blob/master/src/containers/Statefull/SimpleReduxForm/SimpleReduxForm.jsx)
  - Компонент использующий валидацию Redux-From и Redux Store в качестве хранения информации [ссылка](https://github.com/Altairko/im-internship/blob/master/src/containers/Statefull/ValidateReduxForm/ValidateReduxForm.jsx)
- Apollo компоненты которые в качестве источника данных используют удаленный сервер graphql [ссылка](https://github.com/Altairko/im-internship/tree/master/src/containers/Statefull/Apollo)

В файле App.jsx можно посмотреть пример работы с React Router. [ссылка](https://github.com/Altairko/im-internship/blob/master/src/containers/App/App.jsx)

## Установка

Для установки необходимо склонировать данный репозитарий на свой ПК.
Далее выполнить команду

`npm i`

После успешной установки зависимостей запустить сборку командой

`npm run start`
