export class Page {

    public title: string;
    public date: string;
    public content: string;

    constructor(title: string, date: string, content: string) {

        this.title   = title;
        this.date    = date;
        this.content = content;
    }
}