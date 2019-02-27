## База данных по играм с конкурсов раздела

Конкурсы:
* Two Weeks Game `twg.json` (двухнедельный)
* Two-Two Weeks Game `ttwg.json` (четырёхнедельный)
* Two/Two Weeks Game или One Week Game `owg.json` (однонедельный)
* Three Days Game `three-dg.json` (трёхдневный)
* Two Days Game `two-dg.json` (двухдневный)
* Molnija Jam `molnija.json` (конкурс /gd/ и /ruvn/)
* RUVN Contest `ruvn-contest.json` (конкурс /ruvn/)

#### [JSON](https://ru.wikipedia.org/wiki/JSON)-версия

Находится в директории `json/`, также является базовой. Описание схемы находится в файле `scheme.js`.
В поддиректории `min/` доступны минифицированные версии файлов.

### Как с этим работать?

* Установи [Node.js](https://nodejs.org/en/download/) и [Git](https://git-scm.com/downloads)
* Создай папку проекта и зайди через терминал/командлайн
* Введи `git clone https://github.com/twoweeks/games-db .`, репозиторий скачается тебе в папку
* Введи `npm install gulp-cli -g` для установки сборщика Gulp в системе и потом `npm install` для установки зависимостей проекта
* Заполняй руками всё что хочешь поменять, или можешь написать тулзу для заполнения
* Для сборки минифицированных версий введи `gulp build`, если будут какие-то ошибки, то линтер об этом сообщит

### Лицензия

[CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.ru), игры являются интеллектуальной собственностью их авторов.
