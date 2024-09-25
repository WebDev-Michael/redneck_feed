import React from "react";
import Feed from "./Feed"; // Adjust the path as needed
import cattle from "../data/cattle-data.json";
import equine from "../data/equine-data.json";
import poultry from "../data/poultry-data.json";
import rabbit from "../data/rabbit-data.json";
import sheepandgoat from "../data/sheepAndGoat-data.json";
import straightgrains from "../data/straightGrains-data.json";
import swine from "../data/swine-data.json";

export const Cattle = () => (
  <Feed data={ cattle } />
);

export const Equine = () => (
  <Feed data={ equine } />
);

export const Poultry = () => (
    <Feed data={ poultry } />
  );
  
  export const Rabbit = () => (
    <Feed data={ rabbit } />
  );

  export const SheepAndGoat = () => (
    <Feed data={ sheepandgoat } />
  );
  
  export const StraightGrain = () => (
    <Feed data={ straightgrains } />
  );

  export const Swine = () => (
    <Feed data={ swine } />
  );