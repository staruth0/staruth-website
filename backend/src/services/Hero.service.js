import { Hero } from "../models/index.js";

const createHero = async (body) => {
    try {
        const hero = await Hero.create(body);
        return hero;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating hero");
    }
};

const getHeroes = async () => {
    try {
        const heroes = await Hero.find({});
        return heroes;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching heroes");
    }
};

const updateHero = async (id, body) => {
    try {
        const updatedHero = await Hero.findByIdAndUpdate(id, body, { new: true });
        return updatedHero;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating hero");
    }
};

const deleteHero = async (id) => {
    try {
        const deletedHero = await Hero.findByIdAndDelete(id);
        return deletedHero;
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting hero");
    }
};

export { createHero, getHeroes, updateHero, deleteHero };
