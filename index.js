'use strict'

const fs = require('fs')
const path = require('path')

const jsonCompressor = require('json-min-max')
const jsonLint = require("jsonlint")

const root = path.join(__dirname)
const jsonCrude = path.join(root, 'json')
const jsonMin = path.join(jsonCrude, 'min')

fs.readdir(jsonCrude, (err, files) => {
	if (err) {
        return console.error('Ошибка чтения директории: ' + err)
	}

	const tmpFiles = files.filter(file => file.endsWith('json'))

	for (let file of tmpFiles) {
        fs.readFile(path.join(jsonCrude, file), 'utf8', (err, contents) => {
			if (err) {
				return console.error('Ошибка чтения файла: ' + err)
			}

			try {
				jsonLint.parse(contents)
			} catch (e) {
				return console.error('Ошибка чтения файла ' + file + ': ' + e)
			}

			const compressesData = jsonCompressor.minify(contents)

			fs.writeFile(path.join(jsonMin, file), compressesData, (err) => {
				if (err) {
					return console.error('Ошибка записи файла: ' + err)
				}

				console.log('Файл ' + file + ' успешно минифицирован')
			})
		})
    }
})
