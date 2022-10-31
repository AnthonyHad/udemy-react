import React, { useCallback, useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  //Runs after and every render cycle
  // useEffect(() => {
  //   fetch(
  //     'https://react-http-b1771-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json'
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       setIngredients(loadedIngredients);
  //     });
  // }, []);

  //survives rerenders cycles
  const filteredIngerdientsHandler = useCallback((filteredIngerdients) => {
    setIngredients(filteredIngerdients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    fetch(
      'https://react-http-b1771-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
      {
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  const removeIngredientHandler = (ingredientId) => {
    fetch(
      `https://react-http-b1771-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
      {
        method: 'DELETE',
      }
    ).then((response) => {
      setIngredients((prevIngredients) =>
        prevIngredients.filter((el) => el.id !== ingredientId)
      );
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngerdientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
