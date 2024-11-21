import { css } from '@emotion/react';

const myCss = css({
  backgroundColor: '#1976d2',
  color: 'white',
  boxShadow: '2px 2px 3px 0px #ededed',
  display: 'flex',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  gap: '1rem',
  padding: '1rem',
});

type Props = {
  label?: string;
};

export default function Navbar({ label = '' }: Props) {
  return (
    <div css={myCss}>
      <p>My name is, </p>
      <div>{label}</div>
    </div>
  );
}
