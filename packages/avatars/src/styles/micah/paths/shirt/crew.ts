type Props = {
  color: string;
};

export default ({ color }: Props) => `
  <path d="M182.552 38.449l.14.032.144.012C228.961 42.297 256.62 62.785 276.694 91H3.374c16.3-29.342 39.484-48.018 77.07-56.588 16.014-3.651 34.669-5.473 56.556-5.473 9.456 0 16.814 1.443 23.796 3.346 2.587.705 5.187 1.496 7.847 2.304 4.402 1.337 8.968 2.725 13.909 3.86z" fill="${color}" stroke="#000" stroke-width="4"/>
  <path d="M68.93 36.58l9.154-19.596a1.009 1.009 0 011.249-.519c37.926 13.425 72.429 12.48 104.403 3.58a1 1 0 011.079.373l13.932 19.052c.383.524.188 1.262-.416 1.5-33.607 13.196-96.668 10.953-128.916-3.066a.978.978 0 01-.485-1.324z" fill="#FFF" stroke="#000" stroke-width="4"/>
`;
