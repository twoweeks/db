let scheme = {
	"0": { // номер конкурса
		"start": "", // примерный таймштамп времени начала конкурса
		"end": "", // примерный таймштамп времени окончания конкурса
		"theme": "", // тема конкурса
		"description": "", // описание конкурса и/или темы
		"themes": [ // темы конкурса (если несколько)
			{
				"name": "", // название темы
				"description": "" // описание темы
			}
		]
		"achievements": [ // ачивки конкурса
			{
				"name": "", // название ачивки
				"description": "", // описание ачивки
				"gift": "", // гифт за ачивку
				"win": "" // игра, взявшая ачивку
			}
		],
		"site": "", // сайт конкурса
		"games": [
			{
				"name": "", // название игры
				"demo_name": "", // название игры на демо-стадии
				"genre": "", // жанр(ы) игры
				"description": "", // описание игры
				"tools": "", // используемые инструменты
				"image": "", // относительный пусть до скриншота/логотипа игры. Хост на текущий момент: https://113217.selcdn.ru/gd/
				"dependencies": "", // зависимости игры (Flash, Java, etc.)
				"status": "", // статус игры (номер места (от 1 до 3), "win" (если победитель конкурса только один), "final" (если прислана финальная версия), "demo" (если прислана только демо-версия), "updated" (если есть данные только об обновлённой финальной версии) и "disqualified" (если игра дисквалифицирована с конкурса))
				"links": { // ссылки на игру
					"gdrive": "", // ID от файла на Google Drive (drive.google.com/open?id=ID)
					"yadisk": "", // ID от файла на Яндекс.Диске (yadi.sk/d/ID)
					"web": "" // прямая ссылка на веб-версию игры
				},
				"other_links": { // другие ссылки (у "demo", "demo_updated" и "updated" структура аналогична "links")
					"demo": {},
					"demo_updated": {},
					"updated": {},
					"final_multi": {}, // различные вариации финальной версии для разных платформ ("win", "win_x64", "linux", "mac", "android"). Структура объектов аналогична "links"
					"demo_multi": {}, // то же самое, что "final_multi", но для мультиплатформенных демоверсий
					"dlc": {}, // DLC игры
					"repo": { // репозитори(и/й) с исходным кодом игры. Пока только GitHub.
						"github": "" // ID от репозитория игры на GitHub (github.com/ID)
					},
					"store": { // ID игры в магазинах приложений
						"gplay": "", // ID от приложения в Google Play (play.google.com/store/apps/details?id=ID)
						"itunes": "" // ID от приложения в App Store (itunes.apple.com/app/idID)
					},
					"gamejolt": "" // ID от игры на Game Jolt (gamejolt.com/games/ID)
				},
				"note": "", // примечание к игре
				"repeat": "" // актуально пока только для восьмого TWG, где по факту было сразу два конкурса и игры повторялись. Здесь, соотвественно, обозначается стадия ("demo" или "final"), где игра повторяется
			}
		],
		"archive": {}, // архив с играми конкурса (структура аналогична "games"->"links")
		"note": "" // примечание к конкурсу
	}
};
