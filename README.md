# Pin Name Generator

Генерация легко запоминаемых pin-кодов

## Установка
`npm install @tequila99/pin-generator --save`

## Начало работы
const generate = require('@tequila99/pin-generator');

generate(); // '7437'

generate({ length: 6, repetition: 3 }); // '338730'

## API
Модуль возвращает обычную функцию, `generate(options)`

Аргумент `options` является объектом и содержит свойства

* **length** (number) - длина pin кода в символах. Значение по умолчанию **4**.
* **repetition** (boolean) - Количество **гарантированных** повторений одной из цифр в pin коде. Количество реальных повторений может быть и больше. Значение по умолчанию **2**.

```
## Тесты 

Тестов пока нет, но планируются