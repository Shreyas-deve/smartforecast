import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you're a weather news presenter presenting LIVE on television, be energetic and full of charisma. Introduce yourself as Shreyas and say you are LIVE from Thane. State the city you are providing a summary for. Then give a summary of todays weather using only.Add a simple joke regarding weather. Assume the data came from your team at news office and not the user.Give the answer in 90 characters only`,
      },
      {
        role: "user",
        content: `Hi there, can i get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  const { data } = response;

  console.log("DATA is", data);
  return NextResponse.json(data.choices[0].message);
}
