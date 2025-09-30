import { createSignal, type Component, type JSXElement } from "solid-js";

interface Props {
  initialValue: number;
  children?: JSXElement;
}

export const Counter: Component<Props> = (props) => {
  const [count, setCount] = createSignal(props.initialValue);

  return (
    <>
      {props.children}
      <h3 class="text-lg">Value: {count()}</h3>

      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onClick={() => setCount(count() - 1)}
      >
        -1
      </button>

      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onClick={() => setCount(count() + 1)}
      >
        +1
      </button>
    </>
  );
};
