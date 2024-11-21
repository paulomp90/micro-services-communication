import { TextField } from '@mui/material';
import { css } from '@emotion/react';
import { ChangeEvent } from 'react';

const styles = css({
  alignItems: 'center',
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'center',
  padding: '2rem',
});

type Props = {
  name: string | null;
  onNameChange: (name: string) => void;
};

export default function Content({ name, onNameChange }: Props) {
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onNameChange(event.target.value);
  };

  return (
    <div css={styles}>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        value={name || ''}
        onChange={handleNameChange}
      />
    </div>
  );
}
