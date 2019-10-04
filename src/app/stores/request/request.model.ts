export class request{
    public id:string;
    public type:string;
    public item:string;
    public stockInHand: string;
    public issued:string;
    public rateRs:string;
    public ValueRs:string;
    public cts:string;
    public Rrs:string;


    constructor(id:string,type: string, item: string,stockInHand: string, issued: string, rateRs: string, ValueRs: string, cts: string, Rrs: string){
        this.id=id;
        this.type=type;
        this.item=item;
        this.stockInHand=stockInHand;
        this.issued=issued;
        this.rateRs=rateRs;
        this.ValueRs=ValueRs;
        this.cts=cts;
        this.Rrs=Rrs;
    }
}