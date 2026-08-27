export interface Observer{
    update(message:string):void
}

export class Email implements Observer{

    constructor(private email: string){}

    update(message: string):void{
        console.log(message)
    }
}

export class SMS implements Observer{

    constructor(private phone: string){}

    update(message: string):void{
        console.log(`SMS para ${this.phone}: ${message}`)
    }
}

export class Product {
    private observers: Observer[] = []

    subscribe(observer: Observer):void {
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer):void{
        this.observers = this.observers.filter(
            o => o !== observer
        )
    }

    notify(message: string): void{
        this.observers.forEach(
            o => o.update(message)
        )
    }

    setAvailable(available: boolean):void{
        if(available){
            this.notify(`Produsto disponivel`)
        }
    }


}