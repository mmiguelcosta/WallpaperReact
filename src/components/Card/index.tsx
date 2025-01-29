import { SSection } from "./styles";
export interface ICard {
  data: string
  img: string
}
export const Card = ({ data, img }: ICard) => {
  console.log(img)
  return (
    <SSection>
      <aside>
        <h5>Data:</h5>
        <p>{data}</p>
      </aside>
      <aside>
        <img src={img} alt="imag" />
      </aside>
    </SSection>
  );
};
