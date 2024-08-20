import httpStatus from "http-status";
import { createHero, getHeroes, updateHero, deleteHero } from "../services/Hero.service.js";

const heroController = {
    addHero: async (req, res) => {
        try {
            const hero = await createHero(req.body);
            res.status(httpStatus.CREATED).json(hero);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getHeroes: async (req, res) => {
        try {
            const heroes = await getHeroes();
            if (!heroes) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Heroes not found" });
            }
            res.status(httpStatus.OK).json(heroes);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    updateHero: async (req, res) => {
        try {
            const updatedHero = await updateHero(req.params.id, req.body);
            if (!updatedHero) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Hero not found" });
            }
            res.status(httpStatus.OK).json(updatedHero);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    deleteHero: async (req, res) => {
        try {
            const deletedHero = await deleteHero(req.params.id);
            if (!deletedHero) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Hero not found" });
            }
            res.status(httpStatus.NO_CONTENT).end();
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    }
};

export { heroController };
