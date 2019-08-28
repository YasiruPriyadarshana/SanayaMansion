import { Ingredient } from '../../shared/ingredient.model';

export class Catering{
    public name: string;
    public description:string;
    public imagePath:string;
    public ingredients: Ingredient[];
  ingredients2: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredients=ingredients;
    }
}
