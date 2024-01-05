import React from "react";
import Card from "../card/Card";
import "./index.css";

const Calendar = () => {
  return (
    <div className="Card_Box">
      <Card
        day={1}
        present={"https://www.freecodecamp.com"}
        classNames={"Card_Background_1"}
      />
      <Card
        day={2}
        present={"https://www.w3schools.com/"}
        classNames={"Card_Background_2"}
      />
      <Card
        day={3}
        present={"https://github.com/"}
        classNames={"Card_Background_3"}
      />{" "}
      <Card
        day={4}
        present={"https://css-tricks.com/"}
        classNames={"Card_Background_4"}
      />{" "}
      <Card
        day={5}
        present={"https://www.codecademy.com/"}
        classNames={"Card_Background_5"}
      />{" "}
      <Card
        day={6}
        present={"https://cssbattle.dev"}
        classNames={"Card_Background_6"}
      />{" "}
      <Card
        day={7}
        present={
          "https://stackify.com/18-websites-every-developer-should-visit-right-now/"
        }
        classNames={"Card_Background_7"}
      />{" "}
      <Card
        day={8}
        present={"https://coolors.co/"}
        classNames={"Card_Background_8"}
      />{" "}
      <Card
        day={9}
        present={"https://readme.so/"}
        classNames={"Card_Background_9"}
      />{" "}
      <Card
        day={10}
        present={"https://leetcode.com/"}
        classNames={"Card_Background_10"}
      />{" "}
      <Card
        day={11}
        present={"https://codepen.io/"}
        classNames={"Card_Background_11"}
      />{" "}
      <Card
        day={12}
        present={"https://developer.mozilla.org/en-US/"}
        classNames={"Card_Background_12"}
      />{" "}
      <Card
        day={13}
        present={"https://programmerhumor.io"}
        classNames={"Card_Background_13"}
      />
      <Card
        day={14}
        present={
          "https://recoverit.wondershare.com/images/article/04/what-is-a-stop-code-1.jpg"
        }
        classNames={"Card_Background_14"}
      />
      <Card
        day={15}
        present={"https://it.freepik.com/"}
        classNames={"Card_Background_15"}
      />
      <Card
        day={16}
        present={"https://emojipedia.org/"}
        classNames={"Card_Background_16"}
      />{" "}
      <Card
        day={17}
        present={"https://tympanus.net/codrops/"}
        classNames={"Card_Background_17"}
      />{" "}
      <Card
        day={18}
        present={"https://www.sololearn.com"}
        classNames={"Card_Background_18"}
      />{" "}
      <Card
        day={19}
        present={"https://www.udemy.com/"}
        classNames={"Card_Background_19"}
      />{" "}
      <Card
        day={20}
        present={"https://fonts.google.com/"}
        classNames={"Card_Background_20"}
      />{" "}
      <Card
        day={21}
        present={"https://dribbble.com/"}
        classNames={"Card_Background_21"}
      />{" "}
      <Card
        day={22}
        present={"https://stackoverflow.com/"}
        classNames={"Card_Background_22"}
      />{" "}
      <Card
        day={23}
        present={"https://www.iconfinder.com/"}
        classNames={"Card_Background_23"}
      />{" "}
      <Card
        day={24}
        present={"https://www.northpoletimes.com/"}
        classNames={"Card_Background_24"}
      />{" "}
    </div>
  );
};

export default Calendar;
