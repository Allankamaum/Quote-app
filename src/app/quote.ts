export class Quote{
    public showDescription: boolean
    public upvotes: number
    public downvotes: number

constructor(public name: string, public publisher: string, public quote: string, public date : Date){


}
}
