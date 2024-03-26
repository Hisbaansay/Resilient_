import { GoogleGenerativeAI } from "@google/generative-ai";
export const factCheckTweet = async (
  tweet: string
): Promise<[string, string, string]> => {
 

  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC4Kgb01DwMA3pJDdOUDtQ-6oQesTCNvnc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "contents":[{"parts":[{"text":"You are a fact-checking assistant. Please fact-check the following messages to the best of your ability. Please keep your response to 40 words. Can you please categorize the tweet into one of two categories: true, false. Please ensure that the first word of your response is one of the categories, followed by a space, and then your reasoning."+tweet   }]}]
      
    }),

  });

  const data = await res.json();
  const openaiResponse = data.candidates[0].content.parts[0].text;
  const category = getFirstWord(openaiResponse).toLowerCase();
  const subcategory = getSecondWord(openaiResponse).toLowerCase();

  const parsedOpenaiResponse = removeFirstWord(openaiResponse);
  return [parsedOpenaiResponse, category, subcategory];
};

export const disCheckTweet = async (
  tweet: string
): Promise<[string]> => {
  

  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC4Kgb01DwMA3pJDdOUDtQ-6oQesTCNvnc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "contents":[{"parts":[{"text":"You are a fact-checking assistant. Please fact-check the following messages to the best of your ability. Please keep your response to 1 word. Can you please categorize the tweet into one of two categories: disastrous, non-disastrous with respect to the perspective of environment it should mainly categorize as  natural and manmade disaster-related tweets and other tweets."+tweet   }]}]
      
    }),

  });

  const data = await res.json();

  const openaiResponse = data.candidates[0].content.parts[0].text;
  const discategory = getFirstWord(openaiResponse).toLowerCase();

  
  return [discategory];
};

export const infoCheckTweet = async (
  tweet: string
): Promise<[string]> => {
  

  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC4Kgb01DwMA3pJDdOUDtQ-6oQesTCNvnc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "contents":[{"parts":[{"text":"You are a fact-checking assistant. Please fact-check the following messages to the best of your ability. Please keep your response to 1 word. Can you please categorize the tweet into one of two categories: informative (for actual disaster-related tweets),non-informative (for metaphorical disaster-related tweets)."+tweet   }]}]
      
    }),

  });

  const data = await res.json();
 
  const openaiResponse = data.candidates[0].content.parts[0].text;
  const infostatus = getFirstWord(openaiResponse).toLowerCase();

  
  return [infostatus];
};
export const factCheckLangchain = async () => {
  const res = await fetch("http://localhost:3000/api");
  const { data, truthCategory, disasterCategory } = await res.json();
  return [data, truthCategory, disasterCategory];
};

const getFirstWord = (text: string): string => {
  const words = text.split(" ");
  return words[0];
};

const getSecondWord = (text: string): string => {
  const words = text.split(" ");
  return words[1];
};
const removeFirstWord = (text: string): string => {
  return text.split(" ").slice(1).join(" ");
};

export const getToastStatus = (text: string): "success" | "error" | "info" => {
  if (text.includes("true")) {
    return "success";
  } else if (text.includes("false")) {
    return "error";
  } else if (text.includes("unverifiable")) {
    return "info";
  }
  return "info";
};
