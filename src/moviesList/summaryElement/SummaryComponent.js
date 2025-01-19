import { Summary } from "../styled";

function SummaryComponent({ $open }) {
  return (
    <Summary $open={$open}>
      <h2>Movies You watched</h2>{" "}
      <p>Velit ullamco esse deserunt reprehenderit anim culpa labore</p>
    </Summary>
  );
}

export default SummaryComponent;
