type Props = {
  color: string;
};

export default ({ color }: Props) => `
  <path d="M36.466 43.111l.534-.575V7.13l-.954-.585C32.312 4.254 27.772 3 23.08 3 17.44 3 12.16 4.747 8.398 8.295c-3.804 3.587-5.856 8.832-5.311 15.371.53 6.372 2.67 11.061 6.218 14.177a8.013 8.013 0 00-.243 3.21c.39 3.269 2.042 5.624 4.595 7.075C16.091 49.51 19.207 50 22.524 50c5.48 0 10.284-2.947 13.942-6.889z" stroke="#000" stroke-width="4"/>
  <path d="M42.972 23.984c.071-.652.108-1.314.108-1.984 0-10.217-9.507-17-20-17s-19 6.5-18 18.5c.556 6.677 2.946 11.072 6.65 13.717-.588 1.024-.845 2.227-.682 3.6.63 5.281 5.138 7.183 11.476 7.183 11.105 0 19.892-14.047 20.448-24.016z" fill="${color}"/>
  <path d="M27.5 13.5c-4-1.833-12.8-2.8-16 8M17 14c2.167 1.833 6.3 7.5 5.5 15.5" stroke="#000" stroke-width="4"/>
`;
