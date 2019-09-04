class Extension {
    static getIndex<T>(arr: T[], item: T, key: string): number {

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            if (element[key] == item[key]) {
                return index;
            }

        }
        return -1;
    }

    static getIndexById<T>(arr: T[], id: number): number {

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            if (element['id'] == id) {
                return index;
            }

        }
        return -1;
    }
    static getRndInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static formatString(val, format) {
        val = format.substr(0, format.length - val.length) + val;
        return val;
    }

    static distinct<T>(arr: T[], key: string = "id") {
        return arr.filter(function (value, index, self) {
            return Extension.getIndexById(self, value[key]) == index;
        });
    }
    static distinctSimple<T>(arr: T[]) {
        return arr.filter(function (value, index, self) {
            return self.indexOf(value) == index;
        });
    }
}


export { Extension }