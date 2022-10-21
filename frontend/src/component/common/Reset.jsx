import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Reset = createGlobalStyle`
    ${reset};`;

export default function ResetStyle(params) {
  return <Reset />;
}
