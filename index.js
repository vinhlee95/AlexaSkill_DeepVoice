"use strict";

// build and export an event handler
exports.handler = (event, context) => {
   let request = event.request;
   if(request.type === "LaunchRequest") {
      let options={};
      options.speechText = `I want to tell you a secret. <amazon:effect name="whispered">I am not a real human.</amazon:effect>. Can you believe it?`;
      context.succeed(buildResponse(options));
   }
};


// buid the response
const buildResponse = options => {
   const response = {
      version: "1.0",
      response: {
         outputSpeech: {
            type: "SSML",
            ssml: `<speak> ${options.speechText} </speak>`,
         },
      },
   };
   // reprompt if needed
   return response;
};