import { Stack } from "expo-router";
import React from "react";

const ChapterLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="[chapter-label]" options={{ title: "Chapters" }} />
    </Stack>
  );
};

export default ChapterLayout;
