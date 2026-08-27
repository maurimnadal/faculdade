import { Product, Email, SMS } from "./observer";


const p = new Product

const email = new Email('cliente@gmail.com')

const msg = new SMS('cu')

p.subscribe(email)
p.subscribe(msg)
p.setAvailable(true)