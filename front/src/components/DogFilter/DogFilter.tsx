// DogFilter.tsx
import React, { useState } from "react";
import styles from "./dogfilter.module.css";

export interface FilterOptions {
  gender: string[];
  colors: string[];
  priceRange: [number, number];
}

interface Props {
  onFilterChange: (filters: FilterOptions) => void;
  availableColors: string[];
}

const DogFilter: React.FC<Props> = ({ onFilterChange, availableColors }) => {
  const [gender, setGender] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 99999999]);

  const handleCheckboxChange = (
    value: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newRange: [number, number] = [...priceRange];
    newRange[index] = Number(e.target.value) || 0;
    setPriceRange(newRange);
  };

  const applyFilters = () => {
    onFilterChange({ gender, colors, priceRange });
  };

  return (
    <div className={styles.filterContainer}>
      <h3>Filter</h3>

      <div className={styles.filterSection}>
        <h4>Gender</h4>
        {["Male", "Female"].map((g) => (
          <div key={`gender-${g}`}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(g, gender, setGender)}
              />
              {g}
            </label>
          </div>
        ))}
      </div>

      <div className={styles.filterSection}>
        <h4>Color</h4>
        {availableColors.map((color) => (
          <div key={`color-${color}`}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(color, colors, setColors)}
              />
              {color}
            </label>
          </div>
        ))}
      </div>

      <div className={styles.filterSection}>
        <h4>Price</h4>
        <input
          type="number"
          placeholder="Min"
          onChange={(e) => handlePriceChange(e, 0)}
        />
        <input
          type="number"
          placeholder="Max"
          onChange={(e) => handlePriceChange(e, 1)}
        />
      </div>

      <button onClick={applyFilters} className={styles.applyButton}>
        Apply
      </button>
    </div>
  );
};

export default DogFilter;
