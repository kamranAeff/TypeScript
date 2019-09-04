class DataSet {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    yAxisID: string;

    constructor(label: string, border: number, yAxisID: string, bgColor: string, borderColor: string) {
        this.label = label;
        this.borderWidth = border;
        this.data = [];
        this.backgroundColor = bgColor;
        this.borderColor = borderColor;
        // this.yAxisID = yAxisID;
    }
}

export { DataSet }