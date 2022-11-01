import React, { useReducer, useCallback, useMemo, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

//can be used for cleaner code or for states which are interconnected
const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error('Should not get there');
  }
};

const Ingredients = () => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear,
  } = useHttp(); //sets up state and function

  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

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

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({
        type: 'ADD',
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  //survives rerenders cycles
  const filteredIngerdientsHandler = useCallback((filteredIngerdients) => {
    // setIngredients(filteredIngerdients);
    dispatch({ type: 'SET', ingredients: filteredIngerdients });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        'https://react-http-b1771-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
        'POST',
        JSON.stringify(ingredient),
        ingredient,
        'ADD_INGREDIENT'
      );

      // dispatchHttp({ type: 'SEND' });
      // fetch(
      //   'https://react-http-b1771-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
      //   {
      //     method: 'POST',
      //     body: JSON.stringify(ingredient),
      //     headers: { 'Content-Type': 'application/json' },
      //   }
      // )
      //   .then((response) => {
      //     dispatchHttp({ type: 'RESPONSE' });
      //     return response.json();
      //   })
      //   .then((responseData) => {
      //     // setIngredients((prevIngredients) => [
      //     //   ...prevIngredients,
      //     //   { id: responseData.name, ...ingredient },
      //     // ]);
      //     dispatch({
      //       type: 'ADD',
      //       ingredient: { id: responseData.name, ...ingredient },
      //     });
      // });
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://react-http-b1771-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
        'DELETE',
        null,
        ingredientId,
        'REMOVE_INGREDIENT'
      );
    },
    [sendRequest]
  );

  // const clearError = useCallback(() => {
  //   //react batches state updates and will update them once per cycle
  //   // dispatchHttp({ action: 'CLEAR' });
  // }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngerdientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
