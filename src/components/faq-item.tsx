import React, {useState} from "react";
import classnames from "classnames";

type Props = {
  delay: number,
  question: string,
  answer: string | React.ReactNode,
}

export const FaqItem: React.FC<Props> = ({delay, question, answer}: Props) => {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  return (
    <div
      className="card mb-2 card-sm card-body hover-shadow-sm"
      data-aos="dummy-fade-up"
      data-aos-delay={delay}
    >
      <div
        data-target="#panel-1"
        className={classnames("accordion-panel-title", {collapsed: !displayAnswer})}
        data-toggle="collapse"
        role="button"
        aria-expanded={(displayAnswer)}
        aria-controls="panel-1"
        onClick={() => {
          setDisplayAnswer(!displayAnswer);
        }}
      >
        <span className="h6 mb-0">{question}</span>
        <img
          className="icon"
          src="/assets/img/icons/interface/plus.svg"
          alt="plus interface icon"
        />
      </div>
      <div className={classnames({show: displayAnswer}, "collapse")} id="panel-1">
        <div className="pt-3">
          <p className="mb-0">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
