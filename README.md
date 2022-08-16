## База данных по играм с конкурсов раздела /gd/

### ПРОЕКТ БОЛЬШЕ НЕ ПОДДЕРЖИВАЕТСЯ

Конкурсы:
* Two Weeks Game `twg.json` (двухнедельный)
* Two-Two Weeks Game `ttwg.json` (четырёхнедельный)
* Two/Two Weeks Game или One Week Game `owg.json` (однонедельный)
* Three Days Game `three-dg.json` (трёхдневный)
* Two Days Game `two-dg.json` (двухдневный)
* RUVN Contest `ruvn-contest.json` (конкурс /ruvn/)
* Molnija Jam `molnija.json` (конкурс /gd/ и /ruvn/)
* Toxic Jam `toxic.json` (джем [конфы.гд](https://confa.gd))

#### [JSON](https://ru.wikipedia.org/wiki/JSON)-версия

Находится в директории `json/`, также является базовой. Описание схемы находится в файле `scheme.js`.  
В поддиректории `json/min/` доступны минифицированные версии файлов.

### Как с этим работать?

* Установи [Node.js](https://nodejs.org/en/download/) и [Git](https://git-scm.com/downloads)
* Создай папку проекта и зайди через терминал/командлайн
* Введи `git clone https://github.com/twoweeks/db .`, репозиторий скачается в текущую директорию
* Введи `npm install` для установки зависимостей проекта
* Заполняй руками всё что хочешь поменять, или можешь написать тулзу для заполнения (буду благодарен!)
* Для сборки минифицированных версий введи `npm run build`. Eсли будут какие-то ошибки, то линтер об этом сообщит

### Лицензия

[CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.ru), игры являются интеллектуальной собственностью их авторов.
