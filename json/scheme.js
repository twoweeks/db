let scheme = [ // массив, где каждый элемент – конкурс
	{
		"meta": {
			"num": 0, // номер конкурса
			"edition": "" // "Edition" конкурса (если проводится несколько конкурсов под одним номером, но разными организаторами)
		},
		"dates": {
			"start": 0, // примерный таймштамп времени начала конкурса
			"end": 1, // примерный таймштамп времени окончания конкурса
		},
		"themes": [ // темы конкурса
			{
				"name": "", // название темы
				"description": "" // описание темы
				"examples": [] // примеры игр на заданную тему
			}
		],
		"note": "", // описание конкурса / примечание к конкурсу
		"fund": "", // призовой фонд конкурса
		"achievements": [ // ачивки конкурса
			{
				"name": "", // название ачивки
				"description": "", // описание ачивки
				"gift": "", // гифт за ачивку
				"winner": "" // игра, взявшая ачивку
			}
		],
		"site": "", // сайт или блог конкурса
		"games": [
			{
				"name": "", // название игры
				"demo_name": "", // название игры на демо-стадии
				"genre": "", // жанр(ы) игры
				"description": "", // описание игры
				"tools": "", // используемые инструменты
				"image": "", // относительный пусть до скриншота/логотипа игры. Хост на текущий момент: https://gd-cdn.blyat.science
				"dependencies": "", // зависимости игры (Flash, Java, etc.)
				"status": "", // статус игры (номер места (от 1 до 3), "win" (если победитель конкурса только один), "final" (если прислана финальная версия), "demo" (если прислана только демо-версия), "updated" (если есть данные только об обновлённой финальной версии) и "disqualified" (если игра дисквалифицирована с конкурса))
				"links": { // ссылки на игру (стадия соотвествует тому, что указано в "status")
					"gdrive": "", // ID от файла на Google Drive (drive.google.com/open?id=ID)
					"yadisk": "", // ID от файла на Яндекс.Диске (yadi.sk/d/ID)
					"web": "" // ссылка на веб-версию игры или веб-сайт игры
				},
				"other_links": { // другие ссылки (у "demo", "demo_updated" и "updated" структура аналогична "links")
					"demo": {},
					"demo_updated": {},
					"updated": {},
					"final_multi": {}, // различные вариации финальной версии для разных платформ ("win", "win_x64", "linux", "mac", "android"). Структура объектов аналогична "links"
					"demo_multi": {}, // то же самое, что "final_multi", но для мультиплатформенных демоверсий
					"dlc": {}, // DLC игры
					"source": { // исходники игры
						"repo": { // репозитори(и/й) с исходным кодом игры
							"github": "", // ID от репозитория игры на GitHub (github.com/ID)
							"bitbucket": "" // ID от репозитория игры на BitBucket (bitbucket.org/ID)
						},
						"link": "" // ссылка на исходники
					},
					"store": { // ID игры в магазинах приложений
						"steam": "", // ID от приложения в Steam (store.steampowered.com/app/ID)
						"gplay": "", // ID от приложения в Google Play (play.google.com/store/apps/details?id=ID)
						"itunes": "", // ID от приложения в App Store (itunes.apple.com/app/idID)
						"gamejolt": "", // ID от игры на Game Jolt (gamejolt.com/games/ID),
						"itch": { // user.itch.io/game
							"user": "", // ID пользователя на itch.io
							"game": "" // ID игры
						}
					}
				},
				"note": "", // примечание к игре
				"repeat": "" // актуально пока только для восьмого TWG, где по факту было два конкурса одновременно и игры повторялись. В этом поле обозначается стадия ("demo" или "final"), где игра повторяется. Пишется только в одном из конкурсов.
			}
		],
		"archive": {}, // архив с играми конкурса (структура аналогична "games"->"links")
	}
]
