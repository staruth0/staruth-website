import httpStatus from "http-status";
import {createMessage ,getAllMessages, deleteMessage }from '../services/message.service.mjs'



const chatController = {

    createMessage: async (req,res) => {
        try {
            const message = await createMessage(req.body);
            res.status(httpStatus.CREATED).json(message);
        } catch (error) {
            console.log(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send('error saving message');
        }
     },
   getAllMessages: async (req, res) => {
      try {
          const { chat_id } = req.params;
          const messages = await getAllMessages(chat_id);
            res.status(httpStatus.OK).json(messages);
        } catch (error) {
            console.log(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send('error fetching mesages');
        }
   }, 
   deleteMessage: async (req, res) => {
      try {
          const { message_id } = req.params;
          const deletedMessage = await deleteMessage(message_id);
            res.status(httpStatus.OK).json(deletedMessage);
        } catch (error) {
            console.log(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send('error deleting the message');
        }
   }
}


export default chatController;