import { Stack } from "expo-router";
import React from "react";

const SubjectLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="[subject-id]" options={{ title: "Subject" }} />
    
    </Stack>
  );
};

export default SubjectLayout;
