import { useParams } from "react-router";

export function Element() {
  const params = useParams();
  const currentElement = params.element;

  return <h1>element {currentElement}</h1>;
}
