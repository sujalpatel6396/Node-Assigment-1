// chatbot.js

function getResponse(message) {
    const input = message.toLowerCase();
  
    if (input.includes("book") && input.includes("available")) {
      return "Yes, we have many books. What genre are you interested in?";
    } else if (input.includes("timing") || input.includes("open")) {
      return "The library is open from 9 AM to 8 PM, Monday to Saturday.";
    } else if (input.includes("membership")) {
      return "You can become a member by filling out a form at the front desk. It's free!";
    } else if (input.includes("late fee")) {
      return "Late fee is ₹5 per day after the due date.";
    } else if (input.includes("bye")) {
      return "Goodbye! Happy reading.";
    } else {
      return "Sorry, I didn't understand that. Can you ask something else about the library?";
    }
  }
  
  module.exports = { getResponse };
  