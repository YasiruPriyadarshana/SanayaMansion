export class Employee {
    public empId: string;
    public name: string;
    public description: string;
    public basicsalary: number;
    public epf: number;
    public allowance: number;
    public otAmount: number;
    public netSalary: number;

    constructor(empId:string, name:string, description:string,
        basicsalary:number,epf:number,allowance:number,otAmount:number,
        netSalary:number){
            this.empId=empId;
            this.name=name;
            this.description=description;
            this.basicsalary=basicsalary;
            this.epf=epf;
            this.allowance=allowance;
            this.otAmount=otAmount;
            this.netSalary=netSalary;
        }
}