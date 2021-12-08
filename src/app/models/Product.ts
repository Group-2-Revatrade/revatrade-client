export class Product{
    constructor(public productId:number, public productName:String, public productPrice:number, public productQuantity:number, 
        public discount:boolean, public discountRate:number, public description:string, public productPic:string){

        this.productId=productId;
        this.productName=productName;
        this.productPrice=productPrice;
        this.productQuantity=productQuantity;
        this.discount=discount;
        this.discountRate=discountRate;
        this.description=description;
        this.productPic=productPic;
    }
    
    getproductId(){
        return this.productId
    }
    getproductName(){
        return this.productName;
    }
    getproductPrice(){
        return this.productPrice;
    }
    getproductQuantity(){
        return this.productQuantity;
    }
    getdiscount(){
        return this.discount;
    }
    getdiscountRate(){
        return this.discountRate;
    }
    getdescription(){
        return this.description;
    }
    getProductPic(){
        return this.productPic;
    }

}