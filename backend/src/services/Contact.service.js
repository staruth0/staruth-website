import { Contact } from "../models/index.js";

const createContact = async (body) => {
    try {
        const contact = await Contact.create(body);
        return contact;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating contact");
    }
};

const getContacts = async () => {
    try {
        const contacts = await Contact.find({});
        return contacts;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching contacts");
    }
};

const updateContact = async (id, body) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(id, body, { new: true });
        return updatedContact;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating contact");
    }
};

const deleteContact = async (id) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        return deletedContact;
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting contact");
    }
};

export { createContact, getContacts, updateContact, deleteContact };
