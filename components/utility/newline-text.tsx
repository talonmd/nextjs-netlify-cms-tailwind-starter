import { Fragment } from 'react';

const NewlineText = ({ text, children }: { text?: string; children?: string }) => {
  return (
    <Fragment>
      {String(children || text)
        .split('\n')
        .map((string, index) => (
          <p key={index}>{string}</p>
        ))}
    </Fragment>
  );
};

export default NewlineText;
