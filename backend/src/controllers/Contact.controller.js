import httpStatus from "http-status";
import { createContact, getContacts, updateContact, deleteContact } from "../services/Contact.service.js";

const contactController = {
    addContact: async (req, res) => {
        try {
            const contact = await createContact(req.body);
            res.status(httpStatus.CREATED).json(contact);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getContacts: async (req, res) => {
        try {
            const contacts = await getContacts();
            if (!contacts) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Contacts not found" });
            }
            res.status(httpStatus.OK).json(contacts);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    updateContact: async (req, res) => {
        try {
            const updatedContact = await updateContact(req.params.id, req.body);
            if (!updatedContact) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Contact not found" });
            }
            res.status(httpStatus.OK).json(updatedContact);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    deleteContact: async (req, res) => {
        try {
            const deletedContact = await deleteContact(req.params.id);
            if (!deletedContact) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Contact not found" });
            }
            res.status(httpStatus.NO_CONTENT).end();
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    }
};

export { contactController };
