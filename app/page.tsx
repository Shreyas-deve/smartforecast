"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Text, Subtitle, Divider } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen  p-10 flex flex-col justify-center items-center">
      <Card className="max-w-3xl mx-auto">
        <Text className="text-6xl font-bold mb-10 text-center">
          SmartForeCast
        </Text>
        <Subtitle className="text-xl text-center">Powered By OpenAI</Subtitle>

        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
