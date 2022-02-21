import { readFile } from "fs";

const readProcessJSON = (file: string): Promise<object> => {
	return new Promise<object>((resolve, reject) => {
		readFile(file, (err, content) => {
			if (err) reject(err);

			resolve(JSON.parse(content.toString()))
		})
	});
}

const objectToArray = (thisObject: any): string[] => {
	return Object.keys(thisObject).map((k) => {
		return thisObject[k]
	});
}

export { readProcessJSON, objectToArray }