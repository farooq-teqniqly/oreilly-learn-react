import { useEffect, useReducer, useRef, useMemo, useCallback } from "react";
import { getPerson, sillyExpensiveFunction } from "./getPerson";
import { Reset } from "./Reset";

interface State {
  name: string | undefined;
  score: number;
  loading: boolean;
}

type Action =
  | {
      type: "initialize";
      name: string;
    }
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "reset";
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "initialize":
      return { name: action.name, score: 0, loading: false };
    case "increment":
      return { ...state, score: state.score + 1 };
    case "decrement":
      return { ...state, score: state.score - 1 };
    case "reset":
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export function PersonScore() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  const addButtonRef = useRef<HTMLButtonElement>(null);
  const expensiveCalculationResult = useMemo(() => sillyExpensiveFunction(), []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { name } = await getPerson();
      dispatch({ type: "initialize", name: name });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  if (loading) {
    return <div>Fetching data...</div>;
  }

  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <p>{expensiveCalculationResult}</p>
      <button ref={addButtonRef} onClick={() => dispatch({ type: "increment" })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
      <Reset onClick={handleReset}>Reset</Reset>
    </div>
  );
}
