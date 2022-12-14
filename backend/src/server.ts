import express, { Request, Response } from 'express';
import cors from 'cors';

// data
import { sample_foods, sample_tags } from './data';

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost: 4200']
}));

app.get('/api/foods', (request: Request, response: Response)=>{
    response.send(sample_foods);
});

app.get("/api/foods/search/:searchTerm", (request: Request, response: Response)=>{
    const searchTerm = request.params.searchTerm;
    const foods = sample_foods.filter(food=> food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    response.send(foods);
});

app.get("/api/foods/tags", (request: Request, response: Response)=>{
    response.send(sample_tags);
});

app.get("/api/foods/tag/:tagName", (request: Request, response: Response)=>{
    const tagName = request.params.tagName;
    const foods = sample_foods.filter(food => food.tags?.includes(tagName));
    response.send(foods);
});

app.get("/api/foods/:foodId", (request: Request, response: Response)=>{
    const foodId = request.params.foodId;
    const food = sample_foods.find(food => food.id === foodId);
    response.send(food);
})

const PORT: number = 5000;

app.listen(PORT, ()=>console.log(`Server running on "http://localhost:${PORT}"`));